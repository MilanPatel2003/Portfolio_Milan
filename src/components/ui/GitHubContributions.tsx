import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Contribution {
  date: string;
  count: number;
}

const GitHubContributions: React.FC = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/MilanPatel2003/events/public');
        const events = response.data;

        const contributionMap = new Map<string, number>();
        let total = 0;

        events.forEach((event: any) => {
          if (event.type === 'PushEvent') {
            const date = event.created_at.split('T')[0];
            const count = event.payload.commits.length;
            contributionMap.set(date, (contributionMap.get(date) || 0) + count);
            total += count;
          }
        });

        const sortedContributions = Array.from(contributionMap.entries())
          .map(([date, count]) => ({ date, count }))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setContributions(sortedContributions);
        setTotalContributions(total);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-gray-800';
    if (count < 5) return 'bg-green-900';
    if (count < 10) return 'bg-green-700';
    if (count < 15) return 'bg-green-500';
    return 'bg-green-300';
  };

  return (
    <div className="my-8 bg-gray-900 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">{totalContributions} contributions in the last 30 days</h2>
      <div className="flex flex-col gap-1">
        {contributions.map((contribution, index) => (
          <div key={index} className="flex gap-1">
            <div
              className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.count)}`}
              title={`${contribution.date}: ${contribution.count} contributions`}
            ></div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-400">
        {totalContributions} contributions in the last 30 days
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-400">
        <span className="mr-2">Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-gray-800"></div>
          <div className="w-3 h-3 bg-green-900"></div>
          <div className="w-3 h-3 bg-green-700"></div>
          <div className="w-3 h-3 bg-green-500"></div>
          <div className="w-3 h-3 bg-green-300"></div>
        </div>
        <span className="ml-2">More</span>
      </div>
    </div>
  );
};

export default GitHubContributions;