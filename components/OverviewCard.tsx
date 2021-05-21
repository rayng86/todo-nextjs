import React from 'react';
import { definitions } from "../types/supabase";
import { User } from '@supabase/supabase-js';

type OverviewCardProps = {
  user: User,
  count: number,
  todos: Array<definitions['todos']>,
  taskProgress: string,
}

const OverviewCard = ({ user, count, todos, taskProgress } : OverviewCardProps) : JSX.Element => {
  return (
    <div className="shadow-lg rounded-xl w-full md:w-72 p-4 bg-white dark:bg-gray-800 relative overflow-hidden mb-6">
      <div className="w-full h-full block">
        <div className="w-full flex items-center">
          <div className="block relative text-yellow-500 text-5xl">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="flex flex-col items-center ml-2">
            <span className="text-sm text-gray-400">You are logged in as</span>
            <span className="text-gray-600 pl-4">
              {user.email}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between my-2">
          <p className="text-gray-400 text-sm">
            <span>{count} of {todos.length} tasks remaining</span>
          </p>
        </div>
        <div className="w-full h-2 bg-blue-200 rounded-full">
          <div
            className="h-full text-center text-xs text-white bg-blue-600 rounded-full"
            style={{ width: `${taskProgress}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;