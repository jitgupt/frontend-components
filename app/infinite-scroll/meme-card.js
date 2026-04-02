"use client"

export const MemeCard = ({ data }) => {
  const { url, title, author } = data;

  return (
    <div className="flex flex-col gap-2 p-5 m-5 border border-white rounded-lg">
      <img className="w-64 h-64" alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
};
