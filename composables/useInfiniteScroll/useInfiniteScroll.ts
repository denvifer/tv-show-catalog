import { ref, onMounted } from "vue";
import { debounce } from "~/utils/debounce";

export const useInfiniteScroll = (
  callback: () => void,
  direction: "vertical" | "horizontal",
  gap: number = 100
) => {
  const elementRef = ref<HTMLElement>();
  let lastScrollPosition = 0;

  const onScroll = () => {
    const element = elementRef.value;
    if (!element) return;

    if (direction === "vertical") {
      const scrollPosition = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;

      if (
        scrollHeight - scrollPosition - clientHeight <= gap &&
        scrollPosition >= lastScrollPosition
      ) {
        callback();
      }

      lastScrollPosition = scrollPosition;
    } else {
      const scrollPosition = element.scrollLeft;
      const scrollWidth = element.scrollWidth;
      const clientWidth = element.clientWidth;

      if (
        scrollWidth - scrollPosition - clientWidth <= gap &&
        scrollPosition >= lastScrollPosition
      ) {
        callback();
      }

      lastScrollPosition = scrollPosition;
    }
  };

  const onScrollDebounced = debounce(onScroll, 100);

  onMounted(() => {
    const element = elementRef.value;
    if (element) {
      element.addEventListener("scroll", onScrollDebounced);
    }
  });

  onUnmounted(() => {
    const element = elementRef.value;
    if (element) {
      element.removeEventListener("scroll", onScrollDebounced);
    }
  });

  watch(elementRef, (newElement, oldElement) => {
    if (oldElement) {
      oldElement.removeEventListener("scroll", onScrollDebounced);
    }
    if (newElement) {
      newElement.addEventListener("scroll", onScrollDebounced);
    }
  });

  return { elementRef };
};
