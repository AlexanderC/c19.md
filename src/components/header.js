import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'gatsby'

import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListIcon from '@material-ui/icons/Apps'
import PeopleIcon from '@material-ui/icons/People'
import InfoIcon from '@material-ui/icons/Info'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(to right,  #663399, #5B72FF)',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  translationMenu: {
    marginLeft: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {siteTitle}
          </Typography>
          <Button
            edge="end"
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleLanguageClick}
            startIcon={<LanguageIcon />}
            endIcon={<ExpandMoreIcon />}
            className={classes.translationMenu}
          >
            Română
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={handleLanguageClose}>Română</MenuItem>
            <MenuItem onClick={handleLanguageClose}>Русский</MenuItem>
            <MenuItem onClick={handleLanguageClose}><s>English</s></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText>Proiecte</ListItemText>
            </ListItem>
          </Link>
          <Link to="/mentors">
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>Mentori</ListItemText>
            </ListItem>
          </Link>
          <Link to="/about">
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText>Despre noi</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
