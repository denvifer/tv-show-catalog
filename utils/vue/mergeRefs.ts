import { customRef } from "vue";

export const mergeRefs = <T>(...refs: Ref<T>[]) => {
  return customRef((_track, trigger) => ({
    get() {
      throw new Error("The merged ref does not support reading its value.");
    },
    set(value: T) {
      refs.forEach((r) => {
        r.value = value;
      });
      trigger();
    },
  }));
};
