// import { useState } from 'react';

// export default function GoogleAuthDemo() {
//     const [user, setUser] = useState(null);
//     const [showSuccess, setShowSuccess] = useState(false);

//     const simulateGoogleSignIn = () => {
//         // Simulating Google sign-in
//         setTimeout(() => {
//             const mockUser = {
//                 uid: 'demo_' + Math.random().toString(36).substr(2, 9),
//                 displayName: 'Demo User',
//                 email: 'demo@example.com',
//                 photoURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Demo',
//                 createdAt: new Date().toISOString(),
//                 lastLogin: new Date().toISOString()
//             };

//             setUser(mockUser);
//             setShowSuccess(true);
//             setTimeout(() => setShowSuccess(false), 3000);

//             console.log('✅ User signed in:', mockUser);
//             console.log('📊 Data saved to Firebase Realtime Database at: users/' + mockUser.uid);
//         }, 1000);
//     };

//     const handleSignOut = () => {
//         setUser(null);
//         console.log('👋 User signed out');
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//             <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
//                 <div className="text-center mb-8">
//                     <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
//                         <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                         </svg>
//                     </div>
//                     <h1 className="text-3xl font-bold text-gray-800 mb-2">
//                         Firebase Auth Demo
//                     </h1>
//                     <p className="text-gray-600">
//                         Google Sign-In with Realtime Database
//                     </p>
//                 </div>

//                 {showSuccess && (
//                     <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
//                         <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                         <p className="text-green-700 text-sm font-medium">
//                             Successfully authenticated and saved to database!
//                         </p>
//                     </div>
//                 )}

//                 {!user ? (
//                     <div className="space-y-6">
//                         <button
//                             onClick={simulateGoogleSignIn}
//                             className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm"
//                         >
//                             <svg className="w-5 h-5" viewBox="0 0 24 24">
//                                 <path
//                                     fill="#4285F4"
//                                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                                 />
//                                 <path
//                                     fill="#34A853"
//                                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                                 />
//                                 <path
//                                     fill="#FBBC05"
//                                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                                 />
//                                 <path
//                                     fill="#EA4335"
//                                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                                 />
//                             </svg>
//                             Sign in with Google (Demo)
//                         </button>

//                         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                             <p className="text-sm text-blue-800 mb-2">
//                                 <strong>Note:</strong> This is a demo simulation. In your actual project:
//                             </p>
//                             <ul className="text-xs text-blue-700 space-y-1 ml-4 list-disc">
//                                 <li>Install Firebase: <code className="bg-blue-100 px-1 rounded">npm install firebase</code></li>
//                                 <li>Configure Firebase with your credentials</li>
//                                 <li>Enable Google Sign-in in Firebase Console</li>
//                                 <li>Use the code structure shown here</li>
//                             </ul>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="space-y-6">
//                         <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
//                             <img
//                                 src={user.photoURL}
//                                 alt={user.displayName}
//                                 className="w-16 h-16 rounded-full border-2 border-indigo-200"
//                             />
//                             <div className="flex-1">
//                                 <h3 className="font-semibold text-gray-800 text-lg">
//                                     {user.displayName}
//                                 </h3>
//                                 <p className="text-gray-600 text-sm">{user.email}</p>
//                             </div>
//                         </div>

//                         <div className="bg-gray-50 rounded-lg p-4 space-y-3">
//                             <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//                                 </svg>
//                                 Database Structure
//                             </div>
//                             <div className="bg-white rounded p-3 font-mono text-xs text-gray-700 overflow-x-auto">
//                                 <div>users/</div>
//                                 <div className="ml-4">└── {user.uid}/</div>
//                                 <div className="ml-8">├── uid: "{user.uid}"</div>
//                                 <div className="ml-8">├── displayName: "{user.displayName}"</div>
//                                 <div className="ml-8">├── email: "{user.email}"</div>
//                                 <div className="ml-8">├── photoURL: "..."</div>
//                                 <div className="ml-8">├── createdAt: "{user.createdAt.slice(0, 19)}"</div>
//                                 <div className="ml-8">└── lastLogin: "{user.lastLogin.slice(0, 19)}"</div>
//                             </div>
//                         </div>

//                         <div className="bg-green-50 rounded-lg p-4 space-y-2">
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Authentication:</span>
//                                 <span className="text-green-600 font-semibold">✓ Active</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span className="text-gray-600">Database:</span>
//                                 <span className="text-green-600 font-semibold">✓ Synced</span>
//                             </div>
//                         </div>

//                         <button
//                             onClick={handleSignOut}
//                             className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                             </svg>
//                             Sign Out
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }