function useTags(text: string) {
  const mr = /#[a-zA-Zа-яА-ЯёЁ]\w+\b/g
  const resultTags = text.match(mr);

  return resultTags;
}

export default useTags;
