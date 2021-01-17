const App = (() => {
  const content = document.querySelector('#content');

  const clear = () =>
    document.querySelectorAll('#content>article').forEach((node) => (node.style.display = 'none'));

  return { content, clear };
})();

export default App;
