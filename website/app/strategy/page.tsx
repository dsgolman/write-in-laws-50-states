'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Clock, Target, MapPin, Calendar, Users, Vote, TrendingUp } from 'lucide-react'

interface Milestone {
  id: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending'
  dueDate: string
  category: 'arlington' | 'beachside' | 'both'
  progress: number
  lastUpdated: string
}

interface ElectionOpportunity {
  year: number
  office: string
  location: string
  type: 'primary' | 'general'
  status: 'target' | 'considering' | 'monitoring'
  filingDeadline: string
}

const milestones: Milestone[] = [
  {
    id: 'civic-association',
    title: 'Join Arlington Civic Association',
    description: 'Engage with neighborhood civic association and attend monthly meetings',
    status: 'in-progress',
    dueDate: '2025-01-15',
    category: 'arlington',
    progress: 25,
    lastUpdated: '2025-10-18'
  },
  {
    id: 'election-officer',
    title: 'Apply for Election Officer Training',
    description: 'Gain hands-on experience with Arlington\'s pioneering RCV system',
    status: 'pending',
    dueDate: '2025-01-31',
    category: 'arlington',
    progress: 0,
    lastUpdated: '2025-10-18'
  },
  {
    id: 'volunteer-2025',
    title: 'Volunteer with Aligned 2025 Candidates',
    description: 'Support Monique Bryant (School Board) and aligned County Board candidates',
    status: 'pending',
    dueDate: '2025-11-04',
    category: 'arlington',
    progress: 0,
    lastUpdated: '2025-10-18'
  },
  {
    id: 'policy-development',
    title: 'Develop Comprehensive Policy Platform',
    description: 'Refine positions on education, housing, climate, and electoral reform',
    status: 'in-progress',
    dueDate: '2025-06-01',
    category: 'both',
    progress: 60,
    lastUpdated: '2025-10-18'
  },
  {
    id: 'beachside-research',
    title: 'Research Beachside Target Areas',
    description: 'Identify progressive coastal communities with electoral opportunities',
    status: 'pending',
    dueDate: '2025-12-31',
    category: 'beachside',
    progress: 0,
    lastUpdated: '2025-10-18'
  },
  {
    id: 'network-building',
    title: 'Build Dual-Location Political Network',
    description: 'Establish connections in both Arlington and target beachside communities',
    status: 'in-progress',
    dueDate: '2026-06-01',
    category: 'both',
    progress: 15,
    lastUpdated: '2025-10-18'
  }
]

const electionOpportunities: ElectionOpportunity[] = [
  {
    year: 2026,
    office: 'Arlington School Board',
    location: 'Arlington, VA',
    type: 'general',
    status: 'target',
    filingDeadline: '2026-06-17'
  },
  {
    year: 2026,
    office: 'Arlington County Board',
    location: 'Arlington, VA',
    type: 'general',
    status: 'considering',
    filingDeadline: '2026-06-17'
  },
  {
    year: 2027,
    office: 'Virginia House of Delegates',
    location: 'Arlington, VA',
    type: 'general',
    status: 'monitoring',
    filingDeadline: '2027-06-15'
  },
  {
    year: 2028,
    office: 'Local Office (TBD)',
    location: 'Beachside Community',
    type: 'general',
    status: 'target',
    filingDeadline: 'TBD'
  }
]

export default function StrategyPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'arlington' | 'beachside' | 'both'>('all')

  const filteredMilestones = selectedCategory === 'all' 
    ? milestones 
    : milestones.filter(m => m.category === selectedCategory)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'in-progress':
        return <Clock className="h-5 w-5" style={{ color: '#0A3161' }} />
      default:
        return <Target className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'text-white'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'arlington':
        return 'bg-purple-100 text-purple-800'
      case 'beachside':
        return 'text-white'
      default:
        return 'bg-orange-100 text-orange-800'
    }
  }

  const getElectionStatusColor = (status: string) => {
    switch (status) {
      case 'target':
        return 'bg-green-100 text-green-800'
      case 'considering':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const overallProgress = Math.round(milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length)

  return (
    <div className="min-h-screen bg-gradient-to-br py-12" style={{ background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dual-Track Political Strategy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Full transparency in our journey from Arlington civic engagement to beachside political leadership. 
            Track our progress in real-time as we execute each milestone.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" style={{ color: '#0A3161' }} />
              <span className="text-lg font-semibold">Overall Progress: {overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="w-32" />
          </div>
        </div>

        {/* Strategy Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-purple-500" />
                <span>Arlington Track</span>
              </CardTitle>
              <CardDescription>
                Build political experience and credibility through local engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Join civic associations and volunteer with elections</li>
                <li>• Support aligned 2025 candidates</li>
                <li>• Run for School Board or County Board in 2026+</li>
                <li>• Gain expertise in RCV and progressive governance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-cyan-500" />
                <span>Beachside Track</span>
              </CardTitle>
              <CardDescription>
                Leverage Arlington experience for coastal community leadership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Research progressive coastal communities</li>
                <li>• Build network connections in target areas</li>
                <li>• Transfer policy expertise and campaign experience</li>
                <li>• Launch beachside campaign with proven track record</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Milestone Tracking */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-6 w-6" />
              <span>Milestone Tracking</span>
            </CardTitle>
            <CardDescription>
              Real-time progress on strategic objectives with full transparency
            </CardDescription>
            <div className="flex space-x-2 mt-4">
              {['all', 'arlington', 'beachside', 'both'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as any)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMilestones.map((milestone) => (
                <div key={milestone.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(milestone.status)}
                      <h3 className="font-semibold">{milestone.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <Badge 
                        className={`${getStatusColor(milestone.status)} ${milestone.status === 'in-progress' ? 'text-white' : ''}`}
                        style={milestone.status === 'in-progress' ? { backgroundColor: '#0A3161' } : {}}
                      >
                        {milestone.status.replace('-', ' ')}
                      </Badge>
                      <Badge 
                        className={`${getCategoryColor(milestone.category)} ${milestone.category === 'beachside' ? 'text-white' : ''}`}
                        style={milestone.category === 'beachside' ? { backgroundColor: '#0A3161' } : {}}
                      >
                        {milestone.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{milestone.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Due: {milestone.dueDate}</span>
                      <span>Updated: {milestone.lastUpdated}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{milestone.progress}%</span>
                      <Progress value={milestone.progress} className="w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Election Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span>Election Opportunities Timeline</span>
            </CardTitle>
            <CardDescription>
              Strategic election targets and filing deadlines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {electionOpportunities.map((election, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Vote className="h-5 w-5" style={{ color: '#0A3161' }} />
                      <div>
                        <h3 className="font-semibold">{election.office}</h3>
                        <p className="text-sm text-gray-600">{election.location}</p>
                      </div>
                    </div>
                    <Badge className={getElectionStatusColor(election.status)}>
                      {election.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Election Year: {election.year}</span>
                    <span>Filing Deadline: {election.filingDeadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transparency Commitment */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>Transparency Commitment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                This strategy page demonstrates our commitment to full transparency in political engagement. 
                We believe voters deserve to see not just campaign promises, but real-time progress on strategic objectives.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#f1f5f9' }}>
                  <h4 className="font-semibold" style={{ color: '#0A3161' }}>Real-Time Updates</h4>
                  <p className="text-sm text-gray-700">Milestone progress updated weekly</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900">Public Accountability</h4>
                  <p className="text-sm text-green-700">All commitments tracked publicly</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900">Community Input</h4>
                  <p className="text-sm text-purple-700">Strategy evolves with community feedback</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}