import React, {  useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BlurFade from "@/components/ui/blur-fade";

const GitHubContributions: React.FC<{ username: string }> = ({ username }) => {


  const [timeRange, setTimeRange] = useState<'month' | 'halfYear' | 'year'>('year');

  const getLastMonthsDate = (months: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    return date;
  };

  const buttonVariants = {
    inactive: { scale: 1.0, opacity: 0.7 },
    active: { scale: 1.0, opacity: 1 },
  };

  const getLabelText = () => {
    switch (timeRange) {
      case 'month':
        return '{{count}} contributions in the last month';
      case 'halfYear':
        return '{{count}} contributions in the last 6 months';
      case 'year':
      default:
        return '{{count}} contributions in the last year';
    }
  };

  return (
    <BlurFade delay={0.1}>
      <Card className="w-full bg-black/40 backdrop-filter backdrop-blur-lg border border-gray-700 text-white rounded-xl overflow-hidden">
        <CardHeader className="border-b border-gray-700">
          <CardTitle className="text-2xl font-thin text-white">GitHub Contributions</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {['month', 'halfYear', 'year'].map((range) => (
              <motion.button
                key={range}
                variants={buttonVariants}
                initial="inactive"
                animate={timeRange === range ? "active" : "inactive"}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setTimeRange(range as 'month' | 'halfYear' | 'year')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border border-gray-600
                  ${timeRange === range
                    ? 'bg-gray-200 text-black border-gray-400'
                    : 'bg-black/60 text-gray-200 hover:bg-gray-800/80'}
                `}
              >
                {range === 'month' ? 'Last Month' : range === 'halfYear' ? 'Last 6 Months' : 'Last Year'}
              </motion.button>
            ))}
          </div>
          <TooltipProvider>
            <div className="overflow-x-auto w-full flex justify-center">
              <GitHubCalendar
                username={username}
                year="last"
                transformData={(contributions) => {
                  const lastDate = new Date();
                  const startDate = timeRange === 'month' 
                    ? getLastMonthsDate(1) 
                    : timeRange === 'halfYear' 
                      ? getLastMonthsDate(6) 
                      : getLastMonthsDate(12);
                  return contributions.filter(day => {
                    const date = new Date(day.date);
                    return date >= startDate && date <= lastDate;
                  });
                }}
                style={{
                  margin: 'auto',
                  minWidth: 320,
                  maxWidth: '100%',
                }}
                theme={{
                  dark: ['#222', '#444', '#666', '#aaa', '#fff']
                }}
                labels={{
                  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                  totalCount: getLabelText(),
                }}
                colorScheme="dark"
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                renderBlock={(block, activity) => (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {block}
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/90 border border-gray-700 text-gray-200">
                      <p>{activity.count} contributions on {activity.date}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              />
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </BlurFade>
  );
};

export default GitHubContributions;