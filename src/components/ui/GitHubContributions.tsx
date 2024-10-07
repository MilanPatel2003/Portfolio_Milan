import React, { useState } from 'react';
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

const GitHubContributions = ({ username }: { username: string }) => {
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
      <Card className="w-full bg-black/30 backdrop-filter backdrop-blur-lg border border-cyan-500/30 text-white rounded-xl overflow-hidden">
        <CardHeader className="border-b border-green-500/30">
          <CardTitle className="text-2xl font-thin text-green-300">GitHub Contributions</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-center gap-2 mb-4">
            {['month', 'halfYear', 'year'].map((range) => (
              <motion.button
                key={range}
                variants={buttonVariants}
                initial="inactive"
                animate={timeRange === range ? "active" : "inactive"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTimeRange(range as 'month' | 'halfYear' | 'year')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-green-500 text-black'
                    : 'bg-cyan-900/50 text-green-300 hover:bg-cyan-800/50'
                }`}
              >
                {range === 'month' ? 'Last Month' : range === 'halfYear' ? 'Last 6 Months' : 'Last Year'}
              </motion.button>
            ))}
          </div>
          <TooltipProvider>
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
              }}
              theme={{
                dark: ['#1e1e1e', '#003820', '#00592f', '#00854a', '#00b366'],
                light: ['#1e1e1e', '#003820', '#00592f', '#00854a', '#00b366'],
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
                  <TooltipContent className="bg-black/80 border border-cyan-500/50 text-cyan-300">
                    <p>{activity.count} contributions on {activity.date}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            />
          </TooltipProvider>
        </CardContent>
      </Card>
    </BlurFade>
  );
};

export default GitHubContributions;