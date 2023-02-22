function useTags(text: string) {
  const mr = /#[a-zA-Zа-яА-ЯёЁ]\w+\b/g
  const tags = text.match(mr);


  return tags;
}

export default useTags;
