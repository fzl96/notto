const Test = () => {
  
  // Write a function to find the longest common prefix string amongst an array of strings.

  // If there is no common prefix, return an empty string "".
  
  function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
      }
    }
    return prefix;
  };
  

  return (
    <div>Test</div>
  )
}
export default Test