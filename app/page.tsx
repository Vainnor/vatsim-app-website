import {Roboto} from "next/font/google";
import Grid from '@mui/material/Grid2';
import { Typography, Card, CardContent } from '@mui/material';

const headingFont = Roboto({subsets: ['latin'], weight: ['400']});

export default async function Home() {
    return (
      <Grid container columns={8} spacing={4}>
        <Grid size={8}>
          <Card>
            <CardContent>
              <Typography {...headingFont.style} variant="h3" sx={{mb: 1,}}>Welcome to VATSIM Stats</Typography>
              <Typography {...headingFont.style} sx={{mb: 1,}}>
                Fast, accurate, and easy to use stats for VATSIM.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs: 8,md: 4,lg: 2}}>
          <Card>
            <CardContent>
              <Typography {...headingFont.style} variant="h5" sx={{mb: 1,}}>Connections</Typography>
              {/* <Typography {...headingFont.style} sx={{mb: 1,}}>{data.connections}</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs: 8,md: 4,lg: 2}}>
          <Card>
            <CardContent>
              <Typography {...headingFont.style} variant="h5" sx={{mb: 1,}}>Pilots</Typography>
              {/* <Typography {...headingFont.style} sx={{mb: 1,}}>{data.connections}</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs: 8,md: 4,lg: 2}}>
          <Card>
            <CardContent>
              <Typography {...headingFont.style} variant="h5" sx={{mb: 1,}}>ATC</Typography>
              {/* <Typography {...headingFont.style} sx={{mb: 1,}}>{data.connections}</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs: 8,md: 4,lg: 2}}>
          <Card>
            <CardContent>
              <Typography {...headingFont.style} variant="h5" sx={{mb: 1,}}>ATIS</Typography>
              {/* <Typography {...headingFont.style} sx={{mb: 1,}}>{data.connections}</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs: 8, lg: 6}}>
          <Card sx={{height: 600,}}>
            <CardContent>
              <Typography {...headingFont.style} variant="h5" sx={{mb: 1,}}>Upcoming Events</Typography>
              {/* <UpcomingEventsCarousel events={upcomingEvents} imageUrls={imageUrls}/> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs: 8, lg: 2}}>
          <Card sx={{height: 600,}}>
            <CardContent>
              <Typography {...headingFont.style} variant="h5" sx={{mb: 1,}}>Quick Links</Typography>
              {/* <QuickLinksList/> */}
                    </CardContent>
                </Card>
            </Grid>
      </Grid>
    );
}