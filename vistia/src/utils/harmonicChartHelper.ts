// utils/chartHelpers.ts

export interface HarmonicPoint {
  label: string;
  price: number;
  indicator_value: number;
  timestamp: string;
}

interface SvgCoordinate extends HarmonicPoint {
  x: number;
  y: number;
}

interface ChartConfig {
  width?: number;
  height?: number;
  paddingY?: number;
  paddingX?: number; 
}


export const mapDataToSvgCoordinates = (
  points: HarmonicPoint[],
  config: ChartConfig = {}
): Record<string, SvgCoordinate> => {
  const { 
    width = 400, 
    height = 300, 
    paddingY = 40,
    paddingX = 50 
  } = config;

  if (!points || points.length === 0) return {};

  const prices = points.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const priceRange = maxPrice - minPrice === 0 ? 1 : maxPrice - minPrice;

  const availableHeight = height - paddingY * 2;
  const availableWidth = width - paddingX * 2;

  return points.reduce((acc, point, index) => {
    const xRatio = index / (points.length - 1);
    const x = paddingX + xRatio * availableWidth;

    const normalizedPrice = (point.price - minPrice) / priceRange;
    const y = (height - paddingY) - (normalizedPrice * availableHeight);

    acc[point.label] = { ...point, x, y };
    return acc;
  }, {} as Record<string, SvgCoordinate>);
};