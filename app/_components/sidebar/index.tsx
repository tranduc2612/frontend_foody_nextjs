'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, MenuItem, MenuList } from '@mui/material';
import { SIDE_BAR } from '@/app/_ultis/constant';
import { usePathname } from 'next/navigation';

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
  // const router = useRouter();
  // const { setLogout } = useAuth();

  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


  return (
    <Box className="flex flex-col sticky top-0 bg-white shadow-xl h-screen">
      {
          SIDE_BAR.map((itemBar)=>(
            <Accordion sx={{width: '100%'}} expanded={expanded === itemBar.id} onChange={handleChange(itemBar.id)}>
              <AccordionSummary aria-controls={`${itemBar.id}-content`} id={`${itemBar.id}-header`}>
                <Typography color='textPrimary'>{itemBar.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList>
                  {
                    itemBar.child.length > 0 && itemBar.child.map((childBar)=>(
                      <MenuItem className='h-10' sx={(theme) => ({
                        borderLeft: pathname === childBar.url 
                          ? `2px solid red` 
                          : '2px solid transparent',
                      })}>
                        <Typography color={pathname === childBar.url ? 'primary' : 'textPrimary'}>{childBar.title}</Typography>
                      </MenuItem>
                    ))
                  }
                </MenuList>
              </AccordionDetails>
            </Accordion>
          ))
        }
    </Box>
  )
}