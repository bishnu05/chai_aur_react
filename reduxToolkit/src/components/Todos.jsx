import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggleTodo } from "../features/todo/todoSlice";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="my-5 text-2xl">Todos</div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center bg-gray-800 p-4 rounded mb-2"
        >
          <div className="flex items-center gap-2 w-full">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-700 text-white px-2 py-1 rounded w-full"
              />
            ) : (
              <span
                className={`text-gray-100 flex-grow text-left ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.text}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 ml-2">
            {editId === todo.id ? (
              // ✅ Save Button (💾 icon)
              <button onClick={() => handleUpdate(todo.id)} title="Save">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="green"
                  className="w-6 h-6 hover:scale-110 transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            ) : (
              // ✏️ Edit Button
              <button onClick={() => handleEdit(todo)} title="Edit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="yellow"
                  className="w-6 h-6 hover:scale-110 transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.121 2.121 0 113 3l-10.5 10.5a2 2 0 01-.878.515l-4 1a1 1 0 01-1.213-1.213l1-4a2 2 0 01.515-.878l10.5-10.5z"
                  />
                </svg>
              </button>
            )}

            {/* ❌ Delete Button */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}

      {todos.length === 0 && (
        <div className="text-gray-500 text-center mt-4">
          No todos available. Please add some!
        </div>
      )}
    </>
  );
};
