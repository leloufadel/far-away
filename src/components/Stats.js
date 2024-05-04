export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start adding items in your list </em>
      </p>
    );
  let numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  let percentagePacked =
    numItems > 0 ? Math.round((itemPacked / numItems) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? `🎉 You are Ready to go! 🧳 💼 🎉`
          : ` 💼 You have ${numItems} items on your list, and you already packed ${percentagePacked} %`}
      </em>
    </footer>
  );
}
