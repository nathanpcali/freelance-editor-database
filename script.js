// Freelance Editor Database Manager
class EditorManager {
    constructor() {
        this.editors = this.loadFromStorage();
        this.currentEditingId = null;
        this.currentProjectEditorId = null;
        this.currentProjectId = null;
        this.filters = {
            search: '',
            status: '',
            skill: ''
        };
        this.password = 'Harbor';
        this.rateUnlocked = sessionStorage.getItem('rateUnlocked') === 'true';
        this.init();
    }

    init() {
        this.renderEditors();
        this.updateStats();
        this.setupEventListeners();
    }

    // Load editors from localStorage
    loadFromStorage() {
        const stored = localStorage.getItem('freelanceEditors');
        if (stored) {
            return JSON.parse(stored);
        }
        // Return sample data if no stored data exists
        return this.getSampleEditors();
    }

    // Get sample editors for template
    getSampleEditors() {
        // Helper function to get full location name
        const getLocation = (abbrev) => {
            const locations = {
                'LA': 'Los Angeles, CA',
                'NYC': 'New York, NY',
                'CHI': 'Chicago, IL',
                'MIAMI': 'Miami, FL',
                'DEN': 'Denver, CO',
                'PORT': 'Portland, OR',
                'AUST': 'Austin, TX'
            };
            return locations[abbrev] || abbrev;
        };

        return [
            {
                id: '1',
                name: 'Aaron Bencid',
                status: 'available',
                email: 'aaronbencid1@gmail.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '2',
                name: 'Adam Longo',
                status: 'available',
                email: 'adlongo@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '3',
                name: 'Alejandro Santangelo',
                status: 'available',
                email: 'alesantangelo@mac.com',
                phone: '',
                location: 'Miami, FL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '4',
                name: 'Alex Trierweiler',
                status: 'available',
                email: 'atrierweiler@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '5',
                name: 'Bryan Wetzel',
                status: 'available',
                email: 'bryandwetzel@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '6',
                name: 'Catherine Gionfriddo',
                status: 'available',
                email: 'cgionfriddo@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '7',
                name: 'Charlotte Carr',
                status: 'available',
                email: 'charlottecarr@hotmail.com',
                phone: '',
                location: 'Chicago, IL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '8',
                name: 'Chris VanArtsdalen',
                status: 'available',
                email: 'chris.vanartsdalen@gmail.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '9',
                name: 'Chrissy Rabe',
                status: 'available',
                email: 'chrissyrabeeditor@gmail.com',
                phone: '',
                location: 'New York, NY / Austin, TX',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '10',
                name: 'Chuck Willis',
                status: 'available',
                email: 'chuck@gattieandlopez.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '11',
                name: 'Conor McBride',
                status: 'available',
                email: 'conor@conormcbride.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '12',
                name: 'Jeremy Huff',
                status: 'available',
                email: '',
                phone: '',
                location: '',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '13',
                name: 'Jeremiah Shuff',
                status: 'available',
                email: 'jeremiahshuff@gmail.com',
                phone: '',
                location: 'Denver, CO',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '14',
                name: 'Joe Krikscun',
                status: 'available',
                email: 'jkriksciun@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '15',
                name: 'Kevin Palmer',
                status: 'available',
                email: 'kpalmedit.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '16',
                name: 'Marc LaGana',
                status: 'available',
                email: 'marclagana@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '17',
                name: 'Marco Rosas',
                status: 'available',
                email: 'marcoantonio.rosas88@gmail.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '18',
                name: 'Marcos Castiel',
                status: 'available',
                email: 'castielmarcos@icloud.com',
                phone: '',
                location: 'Portland, OR',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '19',
                name: 'Mark Harrington',
                status: 'available',
                email: 'mark@markpatrickharrington.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '20',
                name: 'Mark Myers',
                status: 'available',
                email: 'edit@markryanmyers.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '21',
                name: 'Miki Gilmour',
                status: 'available',
                email: 'darong129@gmail.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '22',
                name: 'Nate Cali',
                status: 'available',
                email: 'nathan.p.cali@gmail.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro', 'After Effects'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '23',
                name: 'Nico Alba',
                status: 'available',
                email: 'nicobaby@mac.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '24',
                name: 'Pablo Colella',
                status: 'available',
                email: 'pablocolella@gmail.com',
                phone: '',
                location: 'Miami, FL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '25',
                name: 'Parker Whipple',
                status: 'available',
                email: 'parker.whipple@harborpicturecompany.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '26',
                name: 'Paul Plew',
                status: 'available',
                email: 'paul@brandplew.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '27',
                name: 'Pete Capo',
                status: 'available',
                email: 'pete@beastlyinc.com',
                phone: '',
                location: 'Miami, FL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '28',
                name: 'Quenton Jones',
                status: 'available',
                email: 'qbjones387@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '29',
                name: 'Ruben Vela II',
                status: 'available',
                email: 'ruben@rubenedits.com',
                phone: '',
                location: 'Chicago, IL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '30',
                name: 'Sean Berringer',
                status: 'available',
                email: 'sberringer66@gmail.com',
                phone: '',
                location: 'Chicago, IL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '31',
                name: 'Sean McGrath',
                status: 'available',
                email: 'bubblesmcgrath@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '32',
                name: 'Steve Evans',
                status: 'available',
                email: 'Editor212@gmail.com',
                phone: '',
                location: 'New York, NY',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '33',
                name: 'Tim Warmanen',
                status: 'available',
                email: 'tim.warmanen@gmail.com',
                phone: '',
                location: 'Chicago, IL',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            },
            {
                id: '34',
                name: 'Valeria Gualdi',
                status: 'available',
                email: 'valeriagualdi@mac.com',
                phone: '',
                location: 'Los Angeles, CA',
                rate: '$1,500',
                skills: ['Commercial'],
                software: ['Premiere Pro'],
                notes: '',
                reel: '',
                projects: []
            }
        ];
    }

    // Save editors to localStorage
    saveToStorage() {
        localStorage.setItem('freelanceEditors', JSON.stringify(this.editors));
    }

    // Setup event listeners
    setupEventListeners() {
        // Add editor button
        document.getElementById('addEditorBtn').addEventListener('click', () => {
            this.openAddModal();
        });

        // Search input
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filters.search = e.target.value.toLowerCase();
            this.renderEditors();
        });

        // Filters
        document.getElementById('statusFilter').addEventListener('change', (e) => {
            this.filters.status = e.target.value;
            this.renderEditors();
        });

        document.getElementById('skillFilter').addEventListener('change', (e) => {
            this.filters.skill = e.target.value;
            this.renderEditors();
        });

        document.getElementById('clearFiltersBtn').addEventListener('click', () => {
            this.clearFilters();
        });

        // Modal close buttons
        document.querySelector('.close').addEventListener('click', () => {
            this.closeEditorModal();
        });

        document.querySelector('.close-detail').addEventListener('click', () => {
            this.closeDetailModal();
        });

        document.querySelector('.close-project').addEventListener('click', () => {
            this.closeProjectModal();
        });

        // Close modals when clicking outside
        document.getElementById('editorModal').addEventListener('click', (e) => {
            if (e.target.id === 'editorModal') {
                this.closeEditorModal();
            }
        });

        document.getElementById('detailModal').addEventListener('click', (e) => {
            if (e.target.id === 'detailModal') {
                this.closeDetailModal();
            }
        });

        document.getElementById('projectModal').addEventListener('click', (e) => {
            if (e.target.id === 'projectModal') {
                this.closeProjectModal();
            }
        });

        // Form submissions
        document.getElementById('editorForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveEditor();
        });

        document.getElementById('projectForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveProject();
        });

        // Cancel buttons
        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.closeEditorModal();
        });

        document.getElementById('cancelProjectBtn').addEventListener('click', () => {
            this.closeProjectModal();
        });

        // Edit from detail
        document.getElementById('editFromDetailBtn').addEventListener('click', () => {
            this.editFromDetail();
        });

        // Skill/Software management
        document.getElementById('addSkillBtn').addEventListener('click', () => {
            this.addSkill();
        });

        document.getElementById('skillInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addSkill();
            }
        });

        document.getElementById('addSoftwareBtn').addEventListener('click', () => {
            this.addSoftware();
        });

        document.getElementById('softwareInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.addSoftware();
            }
        });

        // Photo upload
        document.getElementById('photoUpload').addEventListener('change', (e) => {
            this.handlePhotoUpload(e);
        });

        // Photo URL input
        document.getElementById('editorPhoto').addEventListener('input', (e) => {
            this.updatePhotoPreview(e.target.value);
        });
    }

    // Clear all filters
    clearFilters() {
        this.filters = { search: '', status: '', skill: '' };
        document.getElementById('searchInput').value = '';
        document.getElementById('statusFilter').value = '';
        document.getElementById('skillFilter').value = '';
        this.renderEditors();
    }

    // Filter editors
    filterEditors() {
        return this.editors.filter(editor => {
            // Search filter
            if (this.filters.search) {
                const searchTerm = this.filters.search;
                const matchesSearch = 
                    editor.name.toLowerCase().includes(searchTerm) ||
                    editor.email?.toLowerCase().includes(searchTerm) ||
                    editor.location?.toLowerCase().includes(searchTerm) ||
                    editor.skills?.some(skill => skill.toLowerCase().includes(searchTerm)) ||
                    editor.software?.some(soft => soft.toLowerCase().includes(searchTerm)) ||
                    editor.projects?.some(project => 
                        project.name.toLowerCase().includes(searchTerm) ||
                        project.client?.toLowerCase().includes(searchTerm)
                    );
                if (!matchesSearch) return false;
            }

            // Status filter
            if (this.filters.status && editor.status !== this.filters.status) {
                return false;
            }

            // Skill filter
            if (this.filters.skill && !editor.skills?.includes(this.filters.skill)) {
                return false;
            }

            return true;
        });
    }

    // Render editors grid
    renderEditors() {
        const grid = document.getElementById('editorsGrid');
        const emptyState = document.getElementById('emptyState');
        const filtered = this.filterEditors();

        if (filtered.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'flex';
            return;
        }

        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        grid.innerHTML = filtered.map(editor => this.createEditorCard(editor)).join('');

        // Add click listeners
        grid.querySelectorAll('.editor-card').forEach(card => {
            const editorId = card.dataset.editorId;
            const editor = this.editors.find(e => e.id === editorId);
            if (editor) {
                card.addEventListener('click', () => {
                    this.openDetailModal(editor);
                });
            }
        });

        // Add project button listeners
        grid.querySelectorAll('.add-project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const editorId = btn.dataset.editorId;
                this.openAddProjectModal(editorId);
            });
        });

        // Add day rate unlock listeners
        grid.querySelectorAll('.day-rate-locked').forEach(locked => {
            locked.addEventListener('click', (e) => {
                e.stopPropagation();
                this.promptPassword();
            });
        });
    }

    // Create editor card HTML
    createEditorCard(editor) {
        const statusClass = `status-${editor.status || 'available'}`;
        const activeProjects = editor.projects?.filter(p => 
            p.status === 'in-progress' || p.status === 'upcoming'
        ).length || 0;
        const completedProjects = editor.projects?.filter(p => 
            p.status === 'completed'
        ).length || 0;

        const skillsHtml = editor.skills?.slice(0, 3).map(skill => 
            `<span class="tag">${this.escapeHtml(skill)}</span>`
        ).join('') || '';
        const moreSkills = editor.skills?.length > 3 ? 
            `<span class="tag tag-more">+${editor.skills.length - 3}</span>` : '';

        let photoHtml = '';
        let photoPlaceholder = '';
        if (editor.photo) {
            photoHtml = `<img src="${this.escapeHtml(editor.photo)}" alt="${this.escapeHtml(editor.name)}" class="editor-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
            photoPlaceholder = `<div class="editor-photo-placeholder" style="display: none;">${editor.name.charAt(0).toUpperCase()}</div>`;
        } else {
            photoPlaceholder = `<div class="editor-photo-placeholder">${editor.name.charAt(0).toUpperCase()}</div>`;
        }

        return `
            <div class="editor-card" data-editor-id="${editor.id}">
                <div class="card-header">
                    <div class="editor-photo-container">
                        ${photoHtml}
                        ${photoPlaceholder}
                    </div>
                    <div class="editor-info">
                        <h3 class="editor-name">${this.escapeHtml(editor.name)}</h3>
                        <span class="status-badge ${statusClass}">${this.capitalize(editor.status || 'available')}</span>
                    </div>
                </div>
                <div class="card-body">
                    ${editor.location ? `<div class="card-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${this.escapeHtml(editor.location)}</div>` : ''}
                    ${editor.email ? `<div class="card-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${this.escapeHtml(editor.email)}</div>` : ''}
                    ${editor.rate ? `
                        <div class="card-item day-rate-item" data-editor-id="${editor.id}">
                            <strong>Day Rate:</strong> 
                            ${this.rateUnlocked ? `<span class="day-rate-value">${this.escapeHtml(editor.rate)}</span>` : '<span class="day-rate-locked"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Locked</span>'}
                        </div>
                    ` : ''}
                    ${editor.reel ? `
                        <div class="card-item">
                            <strong>Reel:</strong> 
                            <a href="${this.escapeHtml(editor.reel)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="reel-link">
                                ${this.extractDomain(editor.reel) || 'View Reel'}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 4px;">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    ` : ''}
                </div>
                ${editor.skills?.length > 0 ? `
                    <div class="card-skills">
                        ${skillsHtml}${moreSkills}
                    </div>
                ` : ''}
                <div class="card-footer">
                    <div class="project-stats">
                        <span class="stat-item">${activeProjects} Active</span>
                        <span class="stat-item">${completedProjects} Completed</span>
                    </div>
                    <button class="add-project-btn" data-editor-id="${editor.id}" title="Add Project">+ Project</button>
                </div>
            </div>
        `;
    }

    // Update statistics
    updateStats() {
        const total = this.editors.length;
        const active = this.editors.reduce((sum, editor) => {
            return sum + (editor.projects?.filter(p => 
                p.status === 'in-progress' || p.status === 'upcoming'
            ).length || 0);
        }, 0);
        const available = this.editors.filter(e => e.status === 'available').length;

        document.getElementById('totalEditors').textContent = total;
        document.getElementById('activeProjects').textContent = active;
        document.getElementById('availableEditors').textContent = available;
    }

    // Handle photo upload
    handlePhotoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('editorPhoto').value = e.target.result;
                this.updatePhotoPreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    // Update photo preview
    updatePhotoPreview(photoUrl) {
        const preview = document.getElementById('photoPreview');
        const previewImg = document.getElementById('photoPreviewImg');
        if (photoUrl && photoUrl.trim() !== '') {
            previewImg.src = photoUrl;
            preview.style.display = 'block';
        } else {
            preview.style.display = 'none';
        }
    }

    // Open add editor modal
    openAddModal() {
        this.currentEditingId = null;
        document.getElementById('modalTitle').textContent = 'Add Editor';
        document.getElementById('editorForm').reset();
        document.getElementById('editorId').value = '';
        document.getElementById('skillsContainer').innerHTML = '';
        document.getElementById('softwareContainer').innerHTML = '';
        document.getElementById('photoPreview').style.display = 'none';
        document.getElementById('photoUpload').value = '';
        document.getElementById('editorModal').classList.add('show');
    }

    // Open edit modal
    openEditModal(editor) {
        this.currentEditingId = editor.id;
        document.getElementById('modalTitle').textContent = 'Edit Editor';
        document.getElementById('editorId').value = editor.id;
        document.getElementById('editorName').value = editor.name || '';
        document.getElementById('editorStatus').value = editor.status || 'available';
        document.getElementById('editorEmail').value = editor.email || '';
        document.getElementById('editorPhone').value = editor.phone || '';
        document.getElementById('editorLocation').value = editor.location || '';
        document.getElementById('editorRate').value = editor.rate || '';
        document.getElementById('editorNotes').value = editor.notes || '';
        document.getElementById('editorReel').value = editor.reel || '';
        document.getElementById('editorPhoto').value = editor.photo || '';
        document.getElementById('photoUpload').value = '';
        this.updatePhotoPreview(editor.photo || '');

        // Populate skills
        const skillsContainer = document.getElementById('skillsContainer');
        skillsContainer.innerHTML = '';
        if (editor.skills && editor.skills.length > 0) {
            editor.skills.forEach(skill => {
                this.addSkillTag(skill, 'skillsContainer');
            });
        }

        // Populate software
        const softwareContainer = document.getElementById('softwareContainer');
        softwareContainer.innerHTML = '';
        if (editor.software && editor.software.length > 0) {
            editor.software.forEach(soft => {
                this.addSkillTag(soft, 'softwareContainer');
            });
        }

        document.getElementById('editorModal').classList.add('show');
    }

    // Close editor modal
    closeEditorModal() {
        document.getElementById('editorModal').classList.remove('show');
        document.getElementById('editorForm').reset();
        document.getElementById('photoPreview').style.display = 'none';
        document.getElementById('photoUpload').value = '';
        this.currentEditingId = null;
    }

    // Add skill tag
    addSkillTag(value, containerId) {
        const container = document.getElementById(containerId);
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = value;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'tag-remove';
        removeBtn.innerHTML = '×';
        removeBtn.addEventListener('click', () => {
            tag.remove();
        });
        tag.appendChild(removeBtn);
        container.appendChild(tag);
    }

    // Add skill
    addSkill() {
        const input = document.getElementById('skillInput');
        const value = input.value.trim();
        if (value) {
            this.addSkillTag(value, 'skillsContainer');
            input.value = '';
        }
    }

    // Add software
    addSoftware() {
        const input = document.getElementById('softwareInput');
        const value = input.value.trim();
        if (value) {
            this.addSkillTag(value, 'softwareContainer');
            input.value = '';
        }
    }

    // Get tags from container
    getTagsFromContainer(containerId) {
        const container = document.getElementById(containerId);
        return Array.from(container.querySelectorAll('.tag'))
            .map(tag => tag.textContent.replace('×', '').trim())
            .filter(tag => tag !== '');
    }

    // Save editor
    saveEditor() {
        const name = document.getElementById('editorName').value.trim();
        if (!name) {
            alert('Please enter a name');
            return;
        }

        const editorData = {
            name,
            status: document.getElementById('editorStatus').value,
            email: document.getElementById('editorEmail').value.trim(),
            phone: document.getElementById('editorPhone').value.trim(),
            location: document.getElementById('editorLocation').value.trim(),
            rate: document.getElementById('editorRate').value.trim(),
            notes: document.getElementById('editorNotes').value.trim(),
            reel: document.getElementById('editorReel').value.trim(),
            photo: document.getElementById('editorPhoto').value.trim(),
            skills: this.getTagsFromContainer('skillsContainer'),
            software: this.getTagsFromContainer('softwareContainer'),
            projects: []
        };

        if (this.currentEditingId) {
            // Update existing editor
            const index = this.editors.findIndex(e => e.id === this.currentEditingId);
            if (index !== -1) {
                // Preserve existing projects
                editorData.projects = this.editors[index].projects || [];
                this.editors[index] = { ...this.editors[index], ...editorData };
            }
        } else {
            // Add new editor
            editorData.id = Date.now().toString();
            this.editors.push(editorData);
        }

        this.saveToStorage();
        this.renderEditors();
        this.updateStats();
        this.closeEditorModal();
    }

    // Open detail modal
    openDetailModal(editor) {
        const modal = document.getElementById('detailModal');
        const content = document.getElementById('detailContent');
        const nameEl = document.getElementById('detailName');

        nameEl.textContent = editor.name;
        this.currentEditingId = editor.id;

        let html = '';

        // Photo
        if (editor.photo) {
            html += `<div class="detail-photo-container"><img src="${this.escapeHtml(editor.photo)}" alt="${this.escapeHtml(editor.name)}" class="detail-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="detail-photo-placeholder" style="display: none;">${editor.name.charAt(0).toUpperCase()}</div></div>`;
        } else {
            html += `<div class="detail-photo-container"><div class="detail-photo-placeholder">${editor.name.charAt(0).toUpperCase()}</div></div>`;
        }

        // Status badge
        html += `<div class="detail-status"><span class="status-badge status-${editor.status || 'available'}">${this.capitalize(editor.status || 'available')}</span></div>`;

        // Contact info
        html += '<div class="detail-section"><h3>Contact Information</h3><div class="detail-grid">';
        if (editor.email) {
            html += `<div class="detail-item"><strong>Email:</strong> <a href="mailto:${editor.email}">${this.escapeHtml(editor.email)}</a></div>`;
        }
        if (editor.phone) {
            html += `<div class="detail-item"><strong>Phone:</strong> ${this.escapeHtml(editor.phone)}</div>`;
        }
        if (editor.location) {
            html += `<div class="detail-item"><strong>Location:</strong> ${this.escapeHtml(editor.location)}</div>`;
        }
        html += '</div></div>';

        // Day Rate
        if (editor.rate) {
            if (this.rateUnlocked) {
                html += `<div class="detail-section"><h3>Day Rate</h3><p>${this.escapeHtml(editor.rate)}</p></div>`;
            } else {
                html += `<div class="detail-section"><h3>Day Rate</h3><p class="day-rate-locked-clickable" onclick="editorManager.promptPassword()" style="cursor: pointer; display: inline-flex; align-items: center; gap: 6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Locked - Click to unlock</p></div>`;
            }
        }

        // Reel
        if (editor.reel) {
            html += `<div class="detail-section"><h3>Reel</h3><p><a href="${this.escapeHtml(editor.reel)}" target="_blank" rel="noopener noreferrer" class="detail-link">${this.extractDomain(editor.reel) || editor.reel} →</a></p></div>`;
        }

        // Skills
        if (editor.skills && editor.skills.length > 0) {
            html += '<div class="detail-section"><h3>Skills</h3><div class="detail-tags">';
            editor.skills.forEach(skill => {
                html += `<span class="tag">${this.escapeHtml(skill)}</span>`;
            });
            html += '</div></div>';
        }

        // Software
        if (editor.software && editor.software.length > 0) {
            html += '<div class="detail-section"><h3>Software</h3><div class="detail-tags">';
            editor.software.forEach(soft => {
                html += `<span class="tag">${this.escapeHtml(soft)}</span>`;
            });
            html += '</div></div>';
        }

        // Notes
        if (editor.notes) {
            html += `<div class="detail-section"><h3>Notes</h3><p>${this.escapeHtml(editor.notes)}</p></div>`;
        }

        // Projects
        html += '<div class="detail-section"><div class="section-header"><h3>Projects</h3><button class="btn-secondary btn-small" id="addProjectFromDetailBtn">+ Add Project</button></div>';
        if (editor.projects && editor.projects.length > 0) {
            html += '<div class="projects-list">';
            editor.projects.forEach(project => {
                const statusClass = `project-status-${project.status}`;
                html += `
                    <div class="project-item">
                        <div class="project-header">
                            <h4>${this.escapeHtml(project.name)}</h4>
                            <span class="project-status ${statusClass}">${this.capitalize(project.status.replace('-', ' '))}</span>
                        </div>
                        ${project.client ? `<div class="project-client">Client: ${this.escapeHtml(project.client)}</div>` : ''}
                        ${project.startDate || project.endDate ? `
                            <div class="project-dates">
                                ${project.startDate ? `Start: ${this.formatDate(project.startDate)}` : ''}
                                ${project.startDate && project.endDate ? ' • ' : ''}
                                ${project.endDate ? `End: ${this.formatDate(project.endDate)}` : ''}
                            </div>
                        ` : ''}
                        ${project.notes ? `<div class="project-notes">${this.escapeHtml(project.notes)}</div>` : ''}
                        <div class="project-actions">
                            <button class="btn-link edit-project-btn" data-project-id="${project.id}">Edit</button>
                            <button class="btn-link delete-project-btn" data-project-id="${project.id}">Delete</button>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        } else {
            html += '<p class="empty-text">No projects yet. Click "Add Project" to get started.</p>';
        }
        html += '</div>';

        content.innerHTML = html;

        // Add event listeners
        document.getElementById('addProjectFromDetailBtn')?.addEventListener('click', () => {
            this.openAddProjectModal(editor.id);
        });

        content.querySelectorAll('.edit-project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = btn.dataset.projectId;
                const project = editor.projects.find(p => p.id === projectId);
                if (project) {
                    this.openEditProjectModal(editor.id, project);
                }
            });
        });

        content.querySelectorAll('.delete-project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = btn.dataset.projectId;
                if (confirm('Are you sure you want to delete this project?')) {
                    this.deleteProject(editor.id, projectId);
                }
            });
        });

        modal.classList.add('show');
    }

    // Close detail modal
    closeDetailModal() {
        document.getElementById('detailModal').classList.remove('show');
        this.currentEditingId = null;
    }

    // Edit from detail
    editFromDetail() {
        if (this.currentEditingId) {
            const editor = this.editors.find(e => e.id === this.currentEditingId);
            if (editor) {
                this.closeDetailModal();
                this.openEditModal(editor);
            }
        }
    }

    // Open add project modal
    openAddProjectModal(editorId) {
        this.currentProjectEditorId = editorId;
        this.currentProjectId = null;
        document.getElementById('projectModalTitle').textContent = 'Add Project';
        document.getElementById('projectForm').reset();
        document.getElementById('projectEditorId').value = editorId;
        document.getElementById('projectId').value = '';
        document.getElementById('projectModal').classList.add('show');
    }

    // Open edit project modal
    openEditProjectModal(editorId, project) {
        this.currentProjectEditorId = editorId;
        this.currentProjectId = project.id;
        document.getElementById('projectModalTitle').textContent = 'Edit Project';
        document.getElementById('projectEditorId').value = editorId;
        document.getElementById('projectId').value = project.id;
        document.getElementById('projectName').value = project.name || '';
        document.getElementById('projectClient').value = project.client || '';
        document.getElementById('projectStatus').value = project.status || 'upcoming';
        document.getElementById('projectStartDate').value = project.startDate || '';
        document.getElementById('projectEndDate').value = project.endDate || '';
        document.getElementById('projectNotes').value = project.notes || '';
        document.getElementById('projectModal').classList.add('show');
    }

    // Close project modal
    closeProjectModal() {
        document.getElementById('projectModal').classList.remove('show');
        document.getElementById('projectForm').reset();
        this.currentProjectEditorId = null;
        this.currentProjectId = null;
    }

    // Save project
    saveProject() {
        const editorId = document.getElementById('projectEditorId').value;
        const name = document.getElementById('projectName').value.trim();
        
        if (!name) {
            alert('Please enter a project name');
            return;
        }

        const projectData = {
            name,
            client: document.getElementById('projectClient').value.trim(),
            status: document.getElementById('projectStatus').value,
            startDate: document.getElementById('projectStartDate').value,
            endDate: document.getElementById('projectEndDate').value,
            notes: document.getElementById('projectNotes').value.trim()
        };

        const editor = this.editors.find(e => e.id === editorId);
        if (!editor) return;

        if (!editor.projects) {
            editor.projects = [];
        }

        if (this.currentProjectId) {
            // Update existing project
            const index = editor.projects.findIndex(p => p.id === this.currentProjectId);
            if (index !== -1) {
                projectData.id = this.currentProjectId;
                editor.projects[index] = projectData;
            }
        } else {
            // Add new project
            projectData.id = Date.now().toString();
            editor.projects.push(projectData);
        }

        this.saveToStorage();
        this.renderEditors();
        this.updateStats();
        this.closeProjectModal();
        
        // Refresh detail modal if open
        if (this.currentEditingId === editorId) {
            this.openDetailModal(editor);
        }
    }

    // Delete project
    deleteProject(editorId, projectId) {
        const editor = this.editors.find(e => e.id === editorId);
        if (!editor || !editor.projects) return;

        editor.projects = editor.projects.filter(p => p.id !== projectId);
        this.saveToStorage();
        this.renderEditors();
        this.updateStats();
        
        // Refresh detail modal if open
        if (this.currentEditingId === editorId) {
            this.openDetailModal(editor);
        }
    }

    // Export data
    exportData() {
        const dataStr = JSON.stringify(this.editors, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `harbor-editorial-freelancers-2026-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Import data
    importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (Array.isArray(imported)) {
                    if (confirm(`Import ${imported.length} editor(s)? This will replace your current data.`)) {
                        this.editors = imported;
                        this.saveToStorage();
                        this.renderEditors();
                        this.updateStats();
                        alert('Data imported successfully!');
                    }
                } else {
                    alert('Invalid file format');
                }
            } catch (error) {
                alert('Error importing file: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset file input
    }

    // Utility functions
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    // Extract domain from URL
    extractDomain(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.hostname.replace('www.', '');
        } catch (e) {
            return url;
        }
    }

    // Prompt for password to unlock rates
    promptPassword() {
        const password = prompt('Enter password to view day rates:');
        if (password === this.password) {
            this.rateUnlocked = true;
            sessionStorage.setItem('rateUnlocked', 'true');
            this.renderEditors();
            // If detail modal is open, refresh it
            if (this.currentEditingId) {
                const editor = this.editors.find(e => e.id === this.currentEditingId);
                if (editor) {
                    this.openDetailModal(editor);
                }
            }
        } else if (password !== null) {
            alert('Incorrect password');
        }
    }
}

// Initialize the application
let editorManager;
document.addEventListener('DOMContentLoaded', () => {
    editorManager = new EditorManager();
});

