import React, { useState } from 'react';

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('about');
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const profile = {
        name: "Ashraf Shahin",
        title: "MERN Stack Developer | Business Specialist",
        location: "London, the United Kingdom",
        connections: "7m.+",
        email: "ashshahin786@email.com",
        phone: "+880 181 6677 503",
        website: "github.com/ashrafshahin",
        linkedin: "linkedin.com/in/ashrafshahin",
        github: "github.com/ashrafshahin",
        dribbble: "dribbble.com/ashrafshahin",
        twitter: "@ashrafshahinn",
        about: "Passionate SoftTech innovator and developer with 8+ years of experience creating user-centered digital experiences. Specialized in websites, eCommerce, SaaS products and mobile applications. Business and Financial expertise in Professional sectors, engaged with international business operations. United Nations work experience in Development and Financial sector. Academic based in UK that gives real cross-cultural communication skills to deliver impactful communication initiatives.",
        
        experience: [
            {
                role: "Senior Consultant",
                company: "LionTech Ltd.",
                duration: "2021 - Present",
                description: "Leading design initiatives for enterprise SaaS platform"
            },
            {
                role: "Senior Product Designer",
                company: "Alpha Inc.",
                duration: "2021 - Present",
                description: "Leading design initiatives for enterprise SaaS platform"
            },
            {
                role: "Product Designer",
                company: "StartupXYZ",
                duration: "2018 - 2021",
                description: "Designed mobile app used by 2M+ users"
            }
        ],
        skills: ["Business Development", "UI/UX Design", "Figma", "Canva", "Github", "Product Strategy", "User Research", "Prototyping", "Design Systems", "React.js", "MERN Developer", "Firebase", "WordPress"],
        education: {
            degree: "Bachelor of Arts in Business Studies",
            school: "University of Wales, Cardiff, the UK",
            year: "2009"
        },
        portfolio: [
            {
                title: "E-commerce Mobile App",
                description: "Complete redesign of shopping experience",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
            },
            {
                title: "SaaS Dashboard",
                description: "Enterprise analytics platform",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
            },
            {
                title: "Design System",
                description: "Comprehensive component library",
                image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
            }
        ]
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setProfileImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setCoverImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="text-red-500 font-bold text-2xl">in</div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-700 px-4 py-2 rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <nav className="flex gap-6">
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Home</a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Network</a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Jobs</a>
                        <a href="#" className="text-gray-300 hover:text-white text-sm">Messages</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Card */}
                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                            {/* Cover Photo */}
                            <div className="relative h-32 bg-gradient-to-r from-red-900 to-red-700 group">
                                {coverImage && (
                                    <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                                )}
                                <label className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleCoverImageChange}
                                        className="hidden"
                                    />
                                    Edit Cover
                                </label>
                            </div>

                            {/* Profile Info */}
                            <div className="px-6 pb-6">
                                <div className="flex items-start gap-4 -mt-16">
                                    <div className="relative group">
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                alt="Profile"
                                                className="w-32 h-32 rounded-full border-4 border-gray-800 object-cover"
                                            />
                                        ) : (
                                            <div className="w-32 h-32 bg-gray-700 rounded-full border-4 border-gray-800 flex items-center justify-center text-4xl font-bold text-red-500">
                                                SA
                                            </div>
                                        )}
                                        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleProfileImageChange}
                                                className="hidden"
                                            />
                                            <span className="text-xs text-white font-semibold">Edit</span>
                                        </label>
                                    </div>
                                    <div className="mt-16 flex-1">
                                        <h1 className="text-2xl font-bold">{profile.name}</h1>
                                        <p className="text-gray-300 mt-1">{profile.title}</p>
                                        <p className="text-gray-400 text-sm mt-2">{profile.location} · {profile.connections} connections</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-6">
                                    <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold text-sm transition">
                                        Connect
                                    </button>
                                    <button className="border border-gray-600 hover:border-gray-500 px-6 py-2 rounded-full font-semibold text-sm transition">
                                        Message
                                    </button>
                                    <button className="border border-gray-600 hover:border-gray-500 px-6 py-2 rounded-full font-semibold text-sm transition">
                                        More
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="bg-gray-800 rounded-lg border border-gray-700">
                            <div className="flex border-b border-gray-700">
                                <button
                                    onClick={() => setActiveTab('about')}
                                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'about'
                                            ? 'text-red-500 border-b-2 border-red-500'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => setActiveTab('experience')}
                                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'experience'
                                            ? 'text-red-500 border-b-2 border-red-500'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => setActiveTab('skills')}
                                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'skills'
                                            ? 'text-red-500 border-b-2 border-red-500'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Skills
                                </button>
                                <button
                                    onClick={() => setActiveTab('portfolio')}
                                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'portfolio'
                                            ? 'text-red-500 border-b-2 border-red-500'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Portfolio
                                </button>
                                <button
                                    onClick={() => setActiveTab('contact')}
                                    className={`px-6 py-3 font-semibold text-sm ${activeTab === 'contact'
                                            ? 'text-red-500 border-b-2 border-red-500'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    Contact
                                </button>
                            </div>

                            <div className="p-6">
                                {activeTab === 'about' && (
                                    <div>
                                        <p className="text-gray-300 leading-relaxed">{profile.about}</p>
                                    </div>
                                )}

                                {activeTab === 'experience' && (
                                    <div className="space-y-6">
                                        {profile.experience.map((exp, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="w-12 h-12 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-red-500 font-bold">
                                                    {exp.company[0]}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold">{exp.role}</h3>
                                                    <p className="text-gray-400 text-sm">{exp.company}</p>
                                                    <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                                                    <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'skills' && (
                                    <div className="flex flex-wrap gap-2">
                                        {profile.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-sm transition cursor-pointer"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'portfolio' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {profile.portfolio.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition cursor-pointer"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="p-4">
                                                    <h3 className="font-semibold">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'contact' && (
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                                                @
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">Email</p>
                                                <a href={`mailto:${profile.email}`} className="text-white hover:text-red-500 transition">
                                                    {profile.email}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                                                ☎
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">Phone</p>
                                                <a href={`tel:${profile.phone}`} className="text-white hover:text-red-500 transition">
                                                    {profile.phone}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                                                🌐
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm">Website</p>
                                                <a
                                                    href={`https://${profile.website}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-red-500 transition"
                                                >
                                                    {profile.website}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    // Contact section use it later
                                    // <div className="space-y-4">
                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             @
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">Email</p>
                                    //             <a href="mailto:sarah.anderson@email.com" className="text-white hover:text-red-500 transition">
                                    //                 sarah.anderson@email.com
                                    //             </a>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             ☎
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">Phone</p>
                                    //             <a href="tel:+15551234567" className="text-white hover:text-red-500 transition">
                                    //                 +1 (555) 123-4567
                                    //             </a>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             🌐
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">Website</p>
                                    //             <a href="https://www.sarahdesigns.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
                                    //                 www.sarahdesigns.com
                                    //             </a>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             📍
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">Location</p>
                                    //             <p className="text-white">San Francisco, CA</p>
                                    //             <p className="text-gray-400 text-xs mt-1">Available for remote work</p>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             in
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">LinkedIn</p>
                                    //             <a href="https://linkedin.com/in/sarahanderson" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
                                    //                 linkedin.com/in/sarahanderson
                                    //             </a>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             G
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">GitHub</p>
                                    //             <a href="https://github.com/sarahdesigns" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
                                    //                 github.com/sarahdesigns
                                    //             </a>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             D
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">Dribbble</p>
                                    //             <a href="https://dribbble.com/sarahdesigns" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
                                    //                 dribbble.com/sarahdesigns
                                    //             </a>
                                    //         </div>
                                    //     </div>

                                    //     <div className="flex items-start gap-3">
                                    //         <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">
                                    //             T
                                    //         </div>
                                    //         <div className="flex-1">
                                    //             <p className="text-gray-400 text-sm">Twitter</p>
                                    //             <a href="https://twitter.com/sarahdesigns" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition">
                                    //                 @sarahdesigns
                                    //             </a>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        
                        {/* {/* Education Card */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <h2 className="font-bold mb-4">Education</h2>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-red-500 font-bold text-sm">
                                        ACCA
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">BPP Business School, London, the UK</h3>
                                        <p className="text-gray-400 text-sm">ACCA</p>
                                        <p className="text-gray-500 text-xs mt-1">2014 - 2018</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-red-500 font-bold text-sm">
                                        MBA
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">University of Gloucestershire, Cheltenham, England</h3>
                                        <p className="text-gray-400 text-sm">MBA</p>
                                        <p className="text-gray-500 text-xs mt-1">2011</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-red-500 font-bold text-sm">
                                        BABS
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">Bachelor of Arts in Business Studies</h3>
                                        <p className="text-gray-400 text-sm">University of Wales, Cardiff, the United Kingdom</p>
                                        <p className="text-gray-500 text-xs mt-1">2009</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-red-500 font-bold text-sm">
                                        WEB
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">Coderstrust, International</h3>
                                        <p className="text-gray-400 text-sm">Website Design and Development</p>
                                        <p className="text-gray-500 text-xs mt-1">2019</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-red-500 font-bold text-sm">
                                        MERN
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">Creative IT Institute, International </h3>
                                        <p className="text-gray-400 text-sm">MERN Stack Developer</p>
                                        <p className="text-gray-500 text-xs mt-1">2025-2026</p>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        {/* Analytics Card */}
                        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                            <h2 className="font-bold mb-4">Profile Analytics</h2>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Profile views</span>
                                        <span className="text-red-500 font-semibold">342</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-2 rounded-full">
                                        <div className="bg-red-500 h-2 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-400">Post impressions</span>
                                        <span className="text-red-500 font-semibold">1,245</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-2 rounded-full">
                                        <div className="bg-red-500 h-2 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
                {/* Copyright Footer */}
                <footer className="bg-gray-800 border-t border-gray-700 mt-8">
                    <div className="max-w-5xl mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div className="text-red-500 font-bold text-xl">ASH</div>
                                <p className="text-gray-400 text-sm">© 2025 Ashraf Shahin Profile. All rights reserved.</p>
                            </div>
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-white transition">About</a>
                                <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-white transition">Help Center</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}