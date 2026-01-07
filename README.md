# Freelance Editor Database

A user-friendly web-based database for tracking freelance editors and their commercial work. Perfect for managing freelance talent, tracking projects, and sharing information with your team.

## Features

- **Editor Profiles**: Store comprehensive information about each freelance editor
  - Contact information (email, phone, location)
  - Skills and software expertise
  - Rate information
  - Status (Available, Busy, Unavailable)
  - Reel/portfolio links
  - Notes and additional details

- **Project Tracking**: Manage projects for each editor
  - Project name, client, and status
  - Start and end dates
  - Project notes and details
  - Track project status (Upcoming, In Progress, Completed, Cancelled)

- **Search & Filter**: Quickly find editors
  - Real-time search across names, skills, projects, and more
  - Filter by status (Available, Busy, Unavailable)
  - Filter by skills
  - Clear filters with one click

- **Statistics Dashboard**: At-a-glance overview
  - Total number of editors
  - Active projects count
  - Available editors count

- **Data Management**: Import and export your data
  - Export all data as JSON for backup
  - Import data from JSON files
  - All data stored locally in your browser

- **Shareable**: Easy to share with your team
  - Works in any modern web browser
  - No server required - runs entirely in the browser
  - Can be hosted on any web server or file sharing service

## Getting Started

### Local Use

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start adding editors and projects!

**Note**: Data is stored in your browser's local storage. To share data with others, use the Export/Import features.

### Sharing with Your Team

#### Option 1: File Sharing Service
1. Export your data using the "Export Data" button
2. Share the HTML file and exported JSON with your team
3. Team members can import the JSON to sync data

#### Option 2: Web Hosting
1. Upload all files to a web server (GitHub Pages, Netlify, etc.)
2. Share the URL with your team
3. Each user will have their own local data storage

#### Option 3: Cloud Storage
1. Upload the files to Google Drive, Dropbox, or similar
2. Share the folder with your team
3. Each person opens `index.html` from their own copy

## Usage Guide

### Adding an Editor

1. Click the "+ Add Editor" button
2. Fill in the editor's information:
   - **Name** (required): Full name of the editor
   - **Status**: Current availability
   - **Contact**: Email and phone number
   - **Location**: City, state, or country
   - **Rate**: Hourly, daily, or project rate
   - **Skills**: Add relevant skills (Commercial, Narrative, Documentary, etc.)
   - **Software**: Add software expertise (Premiere Pro, Avid, DaVinci Resolve, etc.)
   - **Notes**: Any additional information
   - **Reel**: Link to their portfolio or reel
3. Click "Save Editor"

### Managing Projects

1. Click on an editor card to view their details
2. Click "+ Add Project" in the Projects section
3. Fill in project information:
   - **Project Name** (required)
   - **Client/Brand**: Name of the client
   - **Status**: Upcoming, In Progress, Completed, or Cancelled
   - **Dates**: Start and end dates
   - **Notes**: Project details and deliverables
4. Click "Save Project"

### Searching and Filtering

- **Search**: Type in the search box to find editors by name, email, skills, or project names
- **Status Filter**: Filter editors by their current availability
- **Skill Filter**: Filter by specific skills
- **Clear Filters**: Reset all filters to show all editors

### Exporting Data

1. Click "Export Data" in the header
2. A JSON file will be downloaded with all your data
3. Keep this file as a backup or share it with others

### Importing Data

1. Click "Import Data" in the header
2. Select a JSON file that was previously exported
3. Confirm the import (this will replace your current data)
4. Your data will be restored

## File Structure

```
freelance-editor-database/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Application logic
└── README.md       # This file
```

## Data Storage

All data is stored locally in your browser's localStorage. This means:
- ✅ No server required
- ✅ Works offline
- ✅ Fast and private
- ⚠️ Data is specific to each browser/device
- ⚠️ Clearing browser data will delete your information (use Export to backup!)

## Browser Support

Works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Tips

1. **Regular Backups**: Export your data regularly to avoid losing information
2. **Consistent Naming**: Use consistent naming for skills and software to make filtering easier
3. **Update Status**: Keep editor statuses up to date for accurate availability tracking
4. **Project Notes**: Use project notes to track deliverables, deadlines, and important details
5. **Reel Links**: Keep reel/portfolio links updated so you can quickly review work

## Customization

### Adding Default Skills

Edit the `skillFilter` select in `index.html` to add your own skill categories.

### Changing Colors

Edit the color values in `styles.css` to match your brand or preferences.

### Adding Fields

To add new fields to editor profiles:
1. Add the input field to the form in `index.html`
2. Update the `saveEditor()` function in `script.js` to include the new field
3. Update the `createEditorCard()` and `openDetailModal()` functions to display the new field

## Troubleshooting

**Data disappeared?**
- Check if you're using the same browser and device
- Try importing a previously exported JSON file
- Check browser settings - some privacy modes clear localStorage

**Can't see editors?**
- Check if filters are active (click "Clear Filters")
- Make sure you've added at least one editor
- Check browser console for errors (F12)

**Import not working?**
- Make sure the file is a valid JSON file exported from this app
- Check that the file isn't corrupted
- Try exporting fresh data first to see the format

## License

This project is provided as-is for personal and commercial use.

## Support

For questions or issues, please check the troubleshooting section above or review the code comments for implementation details.


