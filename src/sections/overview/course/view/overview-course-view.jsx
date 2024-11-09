'use client';

import Box from '@mui/material/Box';

import { DashboardContent } from 'src/layouts/dashboard';

import { PenaliteListView } from '../listes-penalité';

// ----------------------------------------------------------------------

export function OverviewCourseView() {
  return (
    <DashboardContent maxWidth="xl">
      <Box
      /* sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: { xs: 'column', lg: 'row' },
        }} */
      >
        <Box
        /* sx={{
            gap: 3,
            display: 'flex',
            minWidth: { lg: 0 },
            py: { lg: 3, xl: 5 },
            flexDirection: 'column',
            flex: { lg: '1 1 auto' },
            px: { xs: 2, sm: 3, xl: 5 },
            borderRight: (theme) => ({
              lg: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
            }),
          }} */
        >
          <Box
            sx={{
              gap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {/*  <CourseWidgetSummary
              title="Total Penalités"
              total={6}
              icon={`${CONFIG.assetsDir}/assets/icons/courses/ic-courses-progress.svg`}
            />

            <CourseWidgetSummary
              title="Entrée illégale"
              total={3}
              color="success"
              icon={`${CONFIG.assetsDir}/assets/icons/courses/ic-courses-completed.svg`}
            />

            <CourseWidgetSummary
              title="Retard de renouvellement"
              total={2}
              color="secondary"
              icon={`${CONFIG.assetsDir}/assets/icons/courses/ic-courses-certificates.svg`}
            /> */}
          </Box>
          <PenaliteListView />

          {/*    <CourseHoursSpent
            title="Hours spent"
            chart={{
              series: [
                {
                  name: 'Weekly',
                  categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                  data: [{ data: [10, 41, 35, 151, 49] }],
                },
                {
                  name: 'Monthly',
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  data: [{ data: [83, 112, 119, 88, 103, 112, 114, 108, 93] }],
                },
                {
                  name: 'Yearly',
                  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                  data: [{ data: [24, 72, 64, 96, 76, 41] }],
                },
              ],
            }}
          />

          <Box
            sx={{
              gap: 3,
              display: 'grid',
              alignItems: 'flex-start',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              },
            }}
          >
            <CourseProgress
              title="Course progress"
              chart={{
                series: [
                  { label: 'To start', value: 45 },
                  { label: 'In progress', value: 25 },
                  { label: 'Completed', value: 20 },
                ],
              }}
            />

            <CourseContinue title="Continue course" list={_coursesContinue} />
          </Box>

            <CourseFeatured title="Featured course" list={_coursesFeatured} />
        </Box>
 <Box
          sx={{
            width: 1,
            display: 'flex',
            flexDirection: 'column',
            px: { xs: 2, sm: 3, xl: 5 },
            pt: { lg: 8, xl: 10 },
            pb: { xs: 8, xl: 10 },
            flexShrink: { lg: 0 },
            gap: { xs: 3, lg: 5, xl: 8 },
            maxWidth: { lg: 320, xl: 360 },
            bgcolor: { lg: 'background.neutral' },
            [`& .${cardClasses.root}`]: {
              p: { xs: 3, lg: 0 },
              boxShadow: { lg: 'none' },
              bgcolor: { lg: 'transparent' },
            },
          }}
        >
             <CourseMyAccount />

          <CourseMyStrength
            title="Strength"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [{ data: [80, 50, 30, 40, 100, 20] }],
            }}
          />

          <CourseReminders title="Reminders" list={_coursesReminder} />
          
        </Box>
        */}
        </Box>
      </Box>
    </DashboardContent>
  );
}
