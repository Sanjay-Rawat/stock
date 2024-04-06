const HomePage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Note For Sanjay!</h1>
      <ul>
        <li>1. Run NPM I first</li>
        <li>2. Write any resuable component inside components folder</li>
        <li>3. Call that component inside Pages &gt; HomePage</li>
        <li>
          3. Try using tailwind class name, here is the cheatsheet
          https://tailwindcomponents.com/cheatsheet/
        </li>

        <li>
          4. Extensin can install for better dev experience: Tailwind CSS
          IntelliSense, Prettier, ES7+ React/Redux/React-Native snippets
        </li>
        <li>
          Need readymade tailwind components? copy paste code from:
          https://flowbite.com/docs/components/card/
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
