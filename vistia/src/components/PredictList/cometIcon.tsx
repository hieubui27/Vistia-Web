interface CometIconProps {
    color: string;
}

const CometIcon = ({ color }: CometIconProps) => {
    const colorComet = color;
    return(
        <svg width="70px" height="28px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <filter id="comet-glow" x="-50%" y="-50%" width="500%" height="500%">
                                <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor={colorComet} floodOpacity="1" />
                            </filter>
                        </defs>
                        <g filter="url(#comet-glow)"
                            transform="translate(-4.25, 4.25) rotate(225, 36.25, 27.75)">
                            <path fill={colorComet} d="M62 2L4.9 48.4v10.7h10.7z">
                            </path>
                            <path fill={colorComet} d="M33.4 30.6L4.9 48.4v10.7h10.7z">
                            </path>
                            <ellipse cx="10.2" cy="53.5" rx="8.5" ry="7.2" fill={colorComet} transform="rotate(130,10.5,53.5)">
                            </ellipse>
                        </g>

                    </svg>
    )
}

export default CometIcon;