'use client';

import { useState, useCallback } from 'react';

import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { JOB_PUBLISH_OPTIONS } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { JobDetailsToolbar } from '../job-details-toolbar';

// ----------------------------------------------------------------------

export function JobDetailsView({ job }) {
  const tabs = useTabs('content');

  const [publish, setPublish] = useState(job?.publish);

  const handleChangePublish = useCallback((newValue) => {
    setPublish(newValue);
  }, []);

  const renderTabs = (
    <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
      {/* JOB_DETAILS_TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === 'candidates' ? (
              <Label variant="filled">{job?.candidates.length}</Label>
            ) : (
              ''
            )
          }
        />
      )) */}
    </Tabs>
  );

  return (
    <DashboardContent>
      <JobDetailsToolbar
        backLink={paths.dashboard.job.root}
        editLink={paths.dashboard.job.edit(`${job?.id}`)}
        liveLink="#"
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={JOB_PUBLISH_OPTIONS}
      />
      {renderTabs}

      {/* tabs.value === 'content' && <JobDetailsContent job={job} /> */}

      {/* tabs.value === 'candidates' && <JobDetailsCandidates candidates={job?.candidates ?? []} /> */}
    </DashboardContent>
  );
}
