export type Colors =
    | 'white'
    | 'light_cyan'
    | 'neon_green'
    | 'grayish_blue'
    | 'dark_grayish_blue'
    | 'dark_blue'

export const COLORS: Record<Colors, string> = {
    white: '#FFFFFF',
    light_cyan: 'hsl(193, 38%, 86%)',
    neon_green: "hsl(150, 100%, 66%)",
    grayish_blue: "hsl(150, 100%, 66%)",
    dark_grayish_blue: "hsl(217, 19%, 24%)",
    dark_blue: "hsl(218, 23%, 16%)"
}
