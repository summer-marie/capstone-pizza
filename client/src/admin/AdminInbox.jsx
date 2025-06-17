import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, updateMessageRead } from "../redux/messageSlice";

const AdminInbox = () => {
  const dispatch = useDispatch();
  const { messages, loading } = useSelector((state) => state.message);

  const [selected, setSelected] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  const handleSelect = (msg) => {
    setSelected(msg);
    if (!msg.isRead) {
      dispatch(updateMessageRead(msg.id));
    }
  };

  const handleReply = () => {
    alert(`Reply sent to ${selected.email}:\n\n${reply}`);
    setReply("");
  };

  return (
    <>
      <div className="ml-64 px-4">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Message List */}
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-slate-700">
              Inbox
              {/* Unread message count badge */}
              <span className="ml-2 bg-yellow-400 text-yellow-900 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Unread {messages.filter((msg) => !msg.isRead).length}
              </span>
              {/* Read message count badge */}
              <span className="ml-2 bg-slate-200 text-slate-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Read {messages.filter((msg) => msg.isRead).length}
              </span>
            </h2>

            {loading && <div className="text-gray-500">Loading...</div>}
            {/*  This sets the max height to 90% of viewport height minus 100px (for headers/padding) */}
            <ul className="overflow-y-auto pr-1 flex-1 max-h-[calc(90vh-100px)]">
              {messages.length === 0 && (
                <li className="text-gray-400">No messages yet.</li>
              )}
              {messages.map((msg) => (
                <li
                  key={msg.id}
                  onClick={() => handleSelect(msg)}
                  className={`p-3 mb-2 rounded cursor-pointer border ${
                    selected?.id === msg.id
                      ? "bg-slate-100 border-slate-700"
                      : msg.isRead
                      ? "bg-gray-100 border-gray-300"
                      : "bg-yellow-50 border-yellow-400"
                  }`}
                >
                  <div className="font-semibold">{msg.subject}</div>
                  <div className="text-xs text-gray-500">{msg.email}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(msg.date).toLocaleString()}
                  </div>
                  {!msg.isRead && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-yellow-300 text-yellow-900 rounded">
                      New
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Message Detail & Reply */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-6 min-h-[300px]">
            {selected ? (
              <>
                <div className="mb-4">
                  <div className="text-lg font-bold">{selected.subject}</div>
                  <div className="text-sm text-gray-500">{selected.email}</div>
                  <div className="text-xs text-gray-400 mb-2">
                    {new Date(selected.date).toLocaleString()}
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-200 mb-4">
                    {selected.message}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Reply to customer
                  </label>
                  <textarea
                    className="w-full p-2 border rounded mb-2"
                    rows={4}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Type your reply here..."
                  ></textarea>
                  <button
                    className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800 transition"
                    onClick={handleReply}
                  >
                    Send Reply
                  </button>
                </div>
              </>
            ) : (
              <div className="text-gray-400 flex items-center h-full">
                Select a message to read and reply.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInbox;
