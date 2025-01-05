import HighScoreTable from '@/components/dashboard/HighScoreTable'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
      <HighScoreTable />
    </div>
  )
}
