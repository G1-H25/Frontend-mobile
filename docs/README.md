## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/G1-H25/Frontend-mobile.git

cd Frontend-mobile
```

### 2️⃣ Install dependencies
```bash
npm install

or

yarn install
```

### 3️⃣ Create a .env file
```bash
In the root directory, create a .env file and set your local API URL (replace with your Wi-Fi IP address):

EXPO_PUBLIC_API_URL=http://YOUR.WIFI.IP.ADDRESS:3000/
```

### ⚠️ Make sure your phone and computer are on the same Wi-Fi network.

### 4️⃣ Start the Expo app
```bash
npx expo start
```
    Open the Expo Go app on your phone.

    Scan the QR code displayed in your terminal or browser.

    The app should automatically load and connect to your backend.

### 🧰 Backend Setup

Install and run the backend service from this repository:

👉 https://github.com/ToeCrow/testrepo-for-ci-cd-docker

Follow the instructions in that repo to start the server locally or via Docker.
🧪 Testing the App

    Ensure the backend is running and reachable at the IP defined in .env.

    Run npx expo start, open Expo Go, and scan the QR code.

    The app should load and connect to your backend.


### Folder structure
```bash
Frontend-mobile
├── App.tsx                     # Main entry point
├── README.md                   # Project overview
├── app/                        # Main app source
│   ├── (tabs)/                 # Tab-based navigation screens
│   │   ├── _layout.tsx
│   │   ├── health.tsx
│   │   ├── home.tsx
│   │   ├── maps.tsx
│   │   ├── packages.tsx
│   │   ├── scan.tsx
│   │   └── truck.tsx
│   ├── _layout.tsx
│   ├── components/             # Reusable UI components
│   │   ├── AnimatedLogo.tsx
│   │   ├── Background*.tsx
│   │   ├── BigButton.tsx
│   │   ├── ClearStorageButton.tsx
│   │   ├── GetPackages.tsx
│   │   ├── MapComponent.tsx
│   │   ├── NavigationButton.tsx
│   │   ├── PackageItem.tsx
│   │   ├── Scan.tsx
│   │   ├── ScannedItem.tsx
│   │   └── UpdateScreen.tsx
│   ├── context/
│   │   └── PackagesProvider.tsx
│   ├── theme/
│   │   ├── colors.ts
│   │   └── fonts.ts
│   ├── types/
│   │   └── types.ts
│   └── index.tsx
├── assets/
│   ├── fonts/
│   ├── images/
│   └── logos/
├── docs/
│   └── README.md
├── mockqrcodes/
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   └── ...
├── utils/
│   └── updatePackageStatus.ts
├── app.json
├── eslint.config.js
├── expo-env.d.ts
├── package.json
├── package-lock.json
├── react-native.config.js
├── tsconfig.json
