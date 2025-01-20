import {useState} from "react";
import {
    Alert,
    Avatar,
    Box,
    Card, CardContent, FormControl, InputLabel, ListItemButton, MenuItem,
    Paper, Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid2,
    Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import {
    Button,
    Badge,
    Chip,
    Divider,
    FilledInput,
    FormHelperText,
    FormLabel,
    InputAdornment,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Option,
    OutlinedInput,
    Slider,
    SnackbarContent,
    Tabs,
    Tab,
    TabScrollButton, useTheme
} from "@mui/material-next";
import MailIcon from '@mui/icons-material/Mail';
import CircularProgress from "@mui/material-next/CircularProgress";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DownloadIcon from '@mui/icons-material/Download';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddLinkIcon from '@mui/icons-material/AddLink';
import IconButton from "@mui/material-next/IconButton";

export default function TestM3() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (<>
        <Button variant="filled" onClick={()=>{navigate("/")}}>Retour à l'accueil.</Button>
        <Paper variant="outlined">
            <Typography>Boutons avec fond de couleur</Typography>
            <Button variant="filled" color="primary">Ceci est un bouton primaire</Button>
            <Button variant="filled" color="secondary">Ceci est un bouton secondaire</Button>
            <Button variant="filled" color="tertiary">Ceci est un bouton tertiaire</Button>
            <Button variant="filledTonal">Ceci est un bouton tonal</Button>
            <Button variant="filled" color="primary" startIcon={<DownloadIcon/>}>Avec une icône</Button>
        </Paper>
        <Paper variant="outlined">
            <Typography>Boutons avec contour</Typography>
            <Button variant="outlined" color="primary">Ceci est un bouton primaire</Button>
            <Button variant="outlined" color="secondary">Ceci est un bouton secondaire</Button>
            <Button variant="outlined" startIcon={<DownloadIcon/>}>Avec une icône au début</Button>
            <Button variant="outlined" endIcon={<DownloadIcon/>}>Avec une icône à la fin</Button>
        </Paper>
        <Paper variant="outlined">
            <Typography>Button Group</Typography>
            <Paper elevation={5} sx={{borderRadius: 50, width: "fit-content", padding: 0}}>
                <IconButton aria-label="gras"><FormatBoldIcon/></IconButton>
                <IconButton aria-labe="italique"><FormatItalicIcon/></IconButton>
                <IconButton aria-label="souligné"><FormatUnderlinedIcon/></IconButton>
                <IconButton aria-label="liste"><FormatListBulletedIcon/></IconButton>
                <IconButton aria-label="lien"><AddLinkIcon/></IconButton>
            </Paper>
        </Paper>
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <Typography>Chips:</Typography>
                    <Chip label="Success" color="success" onDelete={handleDelete}/>
                    <Chip label="Error" color="error" onDelete={handleDelete}/>
                    <Chip label="Warning" color="warning" onDelete={handleDelete}/>
                    <Chip label="Outlined" variant="outlined" onDelete={handleDelete}/>
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <Typography>Paper sans contour</Typography>
                    <Paper>
                        <Typography>Un autre paper</Typography>
                        <Paper>
                            <Typography>Encore un autre paper</Typography>
                        </Paper>
                    </Paper>
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper variant="outlined" sx={{ mt: 1, p: 1}}>
                    <Typography>Paper avec contour</Typography>
                    <Divider/>
                    <Typography color="primary">Texte primaire</Typography>
                    <Typography color="secondary">Texte secondaire</Typography>
                    <Typography color="tertiary">Texte tertiaire</Typography>
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <form>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sélection</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Sélection"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Premier choix</MenuItem>
                                <MenuItem value={2}>Second choix</MenuItem>
                                <MenuItem value={3}>Troisième choix</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Card sx={{ bgcolor: 'primaryContainer', color: 'primaryContainer.contrastText' }}>
                    <CardContent>
                        <Typography>Carte primaire</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Card sx={{ bgcolor: 'secondaryContainer', color: 'primaryContainer.contrastText' }}>
                    <CardContent>
                        <Typography>Carte secondaire</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Card sx={{ bgcolor: 'tertiaryContainer', color: 'tertiaryContainer.contrastText' }}>
                    <CardContent>
                        <Typography>Carte tertiaire</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="success">
                        <MailIcon color="action" />
                    </Badge>
                    <SwipeLeftIcon size="large" color="disabled"/>
                    <SwipeRightIcon size="large" color="disabled"/>
                    <CircularProgress color="primary" variant="indeterminate" />
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <Slider
                        max={10}
                        min={0}
                        size="medium"
                        valueLabelDisplay="off"
                    />
                    <Slider
                        max={10}
                        min={0}
                        size="small"
                        valueLabelDisplay="on"
                        color="secondary"
                    />
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <Typography>List items:</Typography>
                    <List>
                        <ListSubheader>Subheader</ListSubheader>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            <ListItemSecondaryAction>Secondary action</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Work" secondary="Jan 7, 2014" />
                            <ListItemSecondaryAction><IconButton color="primary"><DownloadIcon/></IconButton></ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Vacation" secondary="July 20, 2014" />
                            <ListItemSecondaryAction><IconButton color="primary"><DownloadIcon/></IconButton></ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                <Paper>
                    <Typography>List buttons:</Typography>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </List>
                </Paper>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 4,
                    md: 6
                }}>
                    <Typography>Alerts:</Typography>
                    <Alert severity="success">Success</Alert>
                    <Alert severity="info">Info</Alert>
                    <Alert severity="warning">Warning</Alert>
                    <Alert severity="error">Error</Alert>
            </Grid2>
            <Grid2
                size={{
                    xs: 4,
                    sm: 8,
                    md: 12
                }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Col A</TableCell>
                                <TableCell>Col B</TableCell>
                                <TableCell>Col C</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>
        </Grid2>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
                h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
                h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
                h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
                h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
                h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
                h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
                button text
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption text
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                overline text
            </Typography>
        </Box>
    </>);
}