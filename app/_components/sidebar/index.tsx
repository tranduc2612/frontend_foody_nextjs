'use client'

import { useAuth } from '@/app/_provider/auth';
import { SIDE_BAR } from '@/app/_ultis/constant';
import images from '@/app/assets';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, MenuItem, MenuList } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon color='primary' sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '&:hover .MuiTypography-root': { // Target Typography when hovered
    color: theme.palette.primary.main, // Change to primary color or any custom color
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0)
}));

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { infoUser } = useAuth();

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <Box className="flex flex-col sticky top-0 bg-white shadow-xl h-screen w-full">
      <Box className="my-5 m-auto">
        <Image
          className='cursor-pointer'
          onClick={() => router.push("/dashboard")}
          src={images.logo.svg}
          alt="logo"
        />
      </Box>

      <Box className="my-0 m-auto mb-10">
        <Avatar
          className='cursor-pointer'
          alt="Kevin"
          onClick={() => router.push("/profile/" + infoUser?.username)}
          src="/static/images/avatar/1.jpg"
          sx={{ width: 50, height: 50 }}
        />
      </Box>

      {
        SIDE_BAR.map((itemBar) => (
          <Accordion key={itemBar.id} sx={{ width: '100%' }} expanded={expanded === itemBar.id} onChange={handleChange(itemBar.id)} TransitionProps={{
            timeout: 800,
          }}>
            <AccordionSummary aria-controls={`${itemBar.id}-content`} id={`${itemBar.id}-header`} expandIcon={itemBar.child.length > 0 ? <ArrowForwardIosSharpIcon color="primary" sx={{ fontSize: '0.9rem' }} /> : null}>
              <Typography color='textPrimary' className='font-europa-bold'>{itemBar.title}</Typography>
            </AccordionSummary>
            {
               itemBar.child.length > 0 &&
              <AccordionDetails>
                <MenuList>
                  {
                    itemBar.child.map((childBar) => (
                      <MenuItem key={childBar.id} className='h-10' sx={(theme) => ({
                        borderLeft: pathname === childBar.url
                          ? `4px solid ${theme.palette.primary.main}`
                          : '4px solid transparent',
                      })} onClick={() => router.push(childBar.url)}>
                        <Typography color={pathname === childBar.url ? 'primary' : 'textPrimary'} className='font-europa-light text-sm'>{childBar.title}</Typography>
                      </MenuItem>
                    ))
                  }
                </MenuList>
              </AccordionDetails>
            }
          </Accordion>
        ))
      }
    </Box>
  )
}