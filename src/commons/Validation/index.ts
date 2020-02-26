export default {
  stringRules: {
    isRequired: (value: string): boolean => !!value && value.length > 0
  }
};
