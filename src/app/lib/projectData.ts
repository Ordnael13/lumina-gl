import slugify from "slugify";
import type { ComponentType } from "react";
import Liquid_Art_Wave from "../projects/liquid-art-wave/page";
import Spectral_Echo from "../projects/spectral-echo/page";
import Rgb_Displacement from "../projects/rgb-displacement/page";
import Image_Alchemy from "../projects/image-alchemy/page";
import Elegance from "../projects/elegance/page";

export interface Lab {
  title: string;
  slug: string;
  preview: string;
  component?: ComponentType;
}


export const projects: Lab[] = [
  {
    title: "Liquid Art Wave",
    slug: slugify("Liquid Art Wave", { lower: true }),
    preview: `/previews/liquid-art-wave.png`,
    component: Liquid_Art_Wave,
  },

  {
    title: "RGB Displacement",
    slug: slugify("RGB Displacement", { lower: true }),
    preview: `/previews/rgb-displacement.png`,
    component: Rgb_Displacement,
  },

  {
    title: "Spectral Echo",
    slug: slugify("Spectral Echo", { lower: true }),
    preview: `/previews/spectral-echo.png`,
    component: Spectral_Echo,
  },

  {
    title: "Image Alchemy",
    slug: slugify("Image Alchemy", { lower: true }),
    preview: `/previews/spectral-echo.png`,
    component: Image_Alchemy,
  },
   {
    title: "Elegance",
    slug: slugify("Elegance Art", { lower: true }),
    preview: `/previews/spectral-echo.png`,
    component: Elegance,
  },

];
