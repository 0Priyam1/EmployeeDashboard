# Employee Dashboard

A comprehensive employee management dashboard built with Next.js, React, and Tailwind CSS. This application provides a clean, professional interface for viewing and managing employee data with advanced filtering, sorting, and search capabilities.

## 🚀 Features

### 📊 Dashboard Overview
- **Summary Statistics**: Total employees, average salary, performance metrics, and department count
- **Real-time Calculations**: Dynamic statistics that update based on filtered data
- **Professional Cards**: Clean card-based layout with icons and key metrics

### 🔍 Advanced Data Management
- **Global Search**: Search across all employee fields (name, email, department, position, location, skills, manager)
- **Department Filtering**: Filter employees by specific departments
- **Column Sorting**: Click any column header to sort data (ascending/descending)
- **Pagination**: Navigate through data with 10 items per page
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 🎨 User Interface
- **Modern Design**: Built with shadcn/ui components and Tailwind CSS
- **Performance Badges**: Color-coded performance ratings (Excellent, Good, Average, Below Average)
- **Status Indicators**: Visual active/inactive employee status
- **Department Labels**: Clean, organized department badges
- **Interactive Elements**: Hover effects and smooth transitions

### 📱 Responsive Features
- **Mobile-First Design**: Optimized for all screen sizes
- **Horizontal Scroll**: Table scrolls horizontally on smaller screens
- **Adaptive Layout**: Cards and filters stack appropriately on mobile

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useMemo)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
employee-dashboard/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   ├── loading.tsx          # Loading component
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   └── theme-provider.tsx   # Theme provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 📊 Data Structure

The application uses a comprehensive employee data structure:

```typescript
interface Employee {
  id: number
  firstName: string
  lastName: string
  email: string
  department: string
  position: string
  salary: number
  hireDate: string
  age: number
  location: string
  performanceRating: number
  projectsCompleted: number
  isActive: boolean
  skills: string[]
  manager: string | null
}
```

## 🎯 Usage

### Dashboard Navigation
1. **View Summary**: Check key metrics at the top of the dashboard
2. **Search Employees**: Use the search bar to find specific employees
3. **Filter by Department**: Select a department from the dropdown
4. **Sort Data**: Click column headers to sort by different fields
5. **Navigate Pages**: Use pagination controls at the bottom

### Search Functionality
The search feature works across multiple fields:
- Employee names (first and last)
- Email addresses
- Departments
- Job positions
- Locations
- Skills
- Manager names

### Sorting Options
Click any column header to sort by:
- ID
- Name (alphabetical)
- Email
- Department
- Position
- Salary (numerical)
- Performance Rating
- Location
- Status

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Customization

### Adding New Employee Fields
1. Update the employee data structure in `app/page.tsx`
2. Add new columns to the table headers
3. Include the field in search functionality if needed
4. Update TypeScript interfaces

### Styling Modifications
- Modify `tailwind.config.ts` for theme changes
- Update component styles in individual files
- Customize shadcn/ui components as needed

### Performance Optimization
- The application uses React's `useMemo` for expensive calculations
- Pagination limits rendered rows for better performance
- Search and filtering are optimized for large datasets

## 📈 Performance Features

- **Efficient Rendering**: Only renders visible table rows
- **Memoized Calculations**: Statistics and filtered data are cached
- **Optimized Search**: Debounced search for better performance
- **Lazy Loading**: Components load as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

## 📞 Support

If you have any questions or need help with the project, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

**Built with ❤️ using Next.js and TypeScript**
```

This comprehensive README file includes:

- **Clear project description** and features
- **Step-by-step installation** instructions
- **Detailed project structure** overview
- **Usage guidelines** and navigation tips
- **Deployment options** for various platforms
- **Customization guides** for extending functionality
- **Performance optimizations** and technical details
- **Contributing guidelines** for collaboration
- **Professional formatting** with emojis and code blocks

The README provides everything needed for developers to understand, install, use, and contribute to the employee dashboard project.
