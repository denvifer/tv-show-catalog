import { convertVwToPixels, getRootCssVariable } from "~/utils/css";
import { debounce } from "~/utils/debounce";

interface ResponsiveStyles {
  catalogTileWidth: number;
}

const resizeDebounceMilliseconds = 500;

const getResponsiveStyles = (): ResponsiveStyles => {
  return {
    catalogTileWidth: convertVwToPixels(
      getRootCssVariable("--catalog-tile-width")
    ),
  };
};

const refresh = () => {
  responsiveStylesRef.value = getResponsiveStyles();
};

const refreshDebounced = debounce(refresh, resizeDebounceMilliseconds);

const responsiveStylesRef = ref<ResponsiveStyles>({
  catalogTileWidth: 0,
});

if (!getIsSsr()) {
  refresh();
  window.addEventListener("resize", refreshDebounced);
}

export const useResponsiveStyles = () => {
  return readonly(responsiveStylesRef);
};
