# Employee Offboarding System

A modern Angular application for managing the employee exit process. The system helps ensure a smooth exit process when an employee leaves the company, with a special focus on returning and managing company equipment.

## Features

- Employee listing with search and filter capabilities
- Department-based organization
- Equipment tracking and management
- Offboarding status tracking
- Responsive Material Design UI
- Real-time data updates
- Prevention of direct URL access to non-existent employee pages

## Prerequisites

- Node.js (v22.14 or higher)
- npm (v1.9.2 or higher)
- Angular CLI (v19.2.10)

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/tortuc/employee-offboarding-system
cd employee-offboarding-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Navigate to `http://localhost:4200` in your browser

## Project Structure

- `src/app/shared/` - Shared components, services, and models
- `src/app/employees/` - Employee-related components and features
- `src/app/shared/fakeDB/` - Mock data for development
- `src/app/shared/models/` - TypeScript interfaces and enums
- `src/app/shared/services/` - Angular services
- `src/app/shared/interceptors/` - HTTP interceptors for API mocking
- `src/app/shared/validators/` - Customized form validators

## Assumptions

1. The application uses a mock backend for development purposes
2. Employee data is stored in localStorage for persistence
3. Equipment tracking is simplified to name-based identification
4. Department and status are managed through enums
5. The system assumes single-page application architecture
6. All API calls are mocked with a 500ms delay to simulate network latency
7. All Subscriptions are unsubscribed when the component is destroyed
8. Customized form validators are used for offboard form
9. Employee.service uese RxJs operators to update the global state
10. The application uses Zoneless Change Detection implemented with Angular signals for performance optimization.
11. Filtering for special fields in tables is handled using a customized filterPredicate.

## Dependencies

- Angular Material
- RxJS
- Angular Router
- Angular Forms
