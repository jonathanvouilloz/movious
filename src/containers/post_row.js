import Link from "next/link";

const PostRow = (postObject) => {

  const { title, user, note, type, _id:id } = postObject.post;
  return (
    <tr key={id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b">
        <div className="flex items-center">
          <div>
            <div className="leading-5 text-gray-800">{user.name}</div>
          </div>
        </div>
      </td>
      <td className="hidden px-6 py-4 text-sm leading-5 whitespace-no-wrap border-b lg:table-cell">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full opacity-50 bg-tagGreen"
          ></span>
          <span className="relative text-sm">{type}</span>
        </span>
      </td>
      <td className="px-6 py-4 leading-5 whitespace-normal whitespace-no-wrap border-b">
        {title}
      </td>
      <td className="hidden px-6 py-4 font-bold leading-5 whitespace-no-wrap border-b text-primaryDarker lg:table-cell">
        {note} / 10
      </td>
      <td className="py-4 text-sm leading-5 text-right whitespace-no-wrap border-b lg:px-6">
        <Link href={`/${id}`}>
          <button className="btn">
            <span className="hidden md:inline-block">Lire l'avis</span>
            <span className="inline-block md:hidden">Lire</span>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default PostRow;
