import chroma from "chroma-js"
import { Meta } from "./common/colorScheme"
import { colorRamp, createColorScheme } from "./common/ramps"
import { metaCommon, name, buildSyntax, Variant } from "./common/atelier-common"

const variant: Variant = {
    meta: {
        name: `${name} Seaside Light`,
        ...metaCommon,
        url: "https://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/",
    },
    colors: {
        base00: "#f4fbf4",
        base01: "#cfe8cf",
        base02: "#8ca68c",
        base03: "#809980",
        base04: "#687d68",
        base05: "#5e6e5e",
        base06: "#242924",
        base07: "#131513",
        base08: "#e6193c",
        base09: "#87711d",
        base0A: "#98981b",
        base0B: "#29a329",
        base0C: "#1999b3",
        base0D: "#3d62f5",
        base0E: "#ad2bee",
        base0F: "#e619c3",
    }
}

const syntax = buildSyntax(variant)

const theme = (variant: Variant) => {
    const { meta, colors } = variant

    return createColorScheme(meta.name, true, {
        neutral: chroma
            .scale([
                colors.base00, colors.base01, colors.base02, colors.base03, colors.base04, colors.base05, colors.base06, colors.base07
            ].reverse()),
        red: colorRamp(chroma(colors.base08)),
        orange: colorRamp(chroma(colors.base09)),
        yellow: colorRamp(chroma(colors.base0A)),
        green: colorRamp(chroma(colors.base0B)),
        cyan: colorRamp(chroma(colors.base0C)),
        blue: colorRamp(chroma(colors.base0D)),
        violet: colorRamp(chroma(colors.base0E)),
        magenta: colorRamp(chroma(colors.base0F)),
    }, syntax)
}

export const dark = theme(variant)

export const meta: Meta = variant.meta
