import { Box, Tabs, Tab } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getChannels } from '../api/channels';
import { getCollections } from '../api/collections';

const tabs = ['Channels', 'Collections'];

const Channels = () => {
    const { userId, tabName } = useParams();
    const { data } = useQuery({
        queryKey: ['channels'],
        queryFn: getChannels,
    });
    return (
        <Box>
            <p>User Id: {userId}</p>
            <p>Location: {tabName}</p>
            {data && (
                <>
                    <p>Total channels: {data.total}</p>
                </>
            )}
        </Box>
    );
};

const Collections = () => {
    const { userId, tabName } = useParams();
    const { data } = useQuery({
        queryKey: ['collections'],
        queryFn: getCollections,
    });
    return (
        <Box>
            <p>User Id: {userId}</p>
            <p>Location: {tabName}</p>
            {data && (
                <>
                    <p>Total collections: {data.total}</p>
                </>
            )}
        </Box>
    );
};

interface Components {
    channels: () => JSX.Element;
    collections: () => JSX.Element;
}

const components = {
    channels: <Channels />,
    collections: <Collections />,
};

export const MainScreen = () => {
    const { userId, tabName } = useParams();
    const navigate = useNavigate();
    const location = tabs.findIndex((tab) => tab.toLowerCase() === tabName);
    const handleChange = (_, newVal) => {
        navigate(`/${userId}/${tabs[newVal].toLowerCase()}`);
    };
    const renderComponent = () => components[tabName as keyof Components];
    return (
        <Box>
            <Tabs
                value={location}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                allowScrollButtonsMobile
                style={{ maxWidth: 'min-content', textAlign: 'left' }}
                textColor='inherit'
                orientation='vertical'
                aria-label='scrollable force tabs example'>
                {tabs.map((tab) => (
                    // TODO: provide better key
                    <Tab key={tab} label={tab} style={{ alignItems: 'baseline' }} />
                ))}
            </Tabs>
            {renderComponent()}
        </Box>
    );
};
