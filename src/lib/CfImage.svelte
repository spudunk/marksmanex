<script lang="ts">
  import { imagePath } from "$lib";
  export let type: "width" | "height" = "width";
  export let alt = "";
  export let id;
  export let src = imagePath + id + "/public";
  export let widths = "[360, 480, 800, 1080]";
  export let heights: string | undefined = undefined;
  export let srcWidth: string | undefined = undefined;
  export let srcHeight: string | undefined = undefined;
  export let sizes = "100vw";
  export let width: string | undefined = undefined;
  export let height: string | undefined = undefined;
  export let loading: "lazy" | "eager" = "eager";

  // sizes example:
  // (max-width: 1500px) 1500px,
  // (max-width: 2000px) 2000px,
  // 12000px"

  type SrcSetWidthConfig = {
    id: string;
    prefix?: string;
    widths?: number[];
    srcWidth?: string | undefined;
  };

  type SrcSetHeightConfig = {
    id: string;
    prefix?: string;
    heights?: number[];
    srcHeight?: string | undefined;
  };

  let srcSetWidthConfig: SrcSetWidthConfig;
  let srcSetHeightConfig: SrcSetHeightConfig;
  let srcset: string;

  function getSrcSetWidth(config: SrcSetWidthConfig) {
    let sources: string[] = [];
    config.widths?.forEach((width) => {
      sources.push(`${config.prefix}${config.id}/w=${width} ${width}w`);
    });
    if (srcWidth) {
      sources.push(`${config.prefix}${config.id}/public ${config.srcWidth}w`);
    }
    return sources.join(", ");
  }

  function getSrcSetHeight(config: SrcSetHeightConfig) {
    let sources: string[] = [];
    config.heights?.forEach((height) => {
      sources.push(`${config.prefix}${config.id}/h=${height} ${height}w`);
    });
    if (srcHeight) {
      sources.push(`${config.prefix}${config.id}/public ${config.srcHeight}w`);
    }
    return sources.join(", ");
  }

  if (type === "width" && widths) {
    srcSetWidthConfig = {
      id: id,
      prefix: imagePath,
      widths: JSON.parse(widths),
      srcWidth: srcWidth,
    };
    srcset = getSrcSetWidth(srcSetWidthConfig);
  }

  if (type === "height" && heights) {
    srcSetHeightConfig = {
      id: id,
      prefix: imagePath,
      heights: JSON.parse(heights),
      srcHeight: srcHeight,
    };
    srcset = getSrcSetHeight(srcSetHeightConfig);
  }

</script>

<img
  class={$$props.class}
  {alt}
  {src}
  {srcset}
  {sizes}
  {width}
  {height}
  {loading}
/>
