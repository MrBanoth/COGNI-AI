"use client";
import { useParams } from 'next/navigation';
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";
import { services } from "../../services/page";
import Link from "next/link";
import Image from "next/image";

const serviceDetails = {
  1: {
    process: [
      "Requirement Analysis & Planning",
      "Custom Architecture Design",
      "Model Development & Training",
      "Integration & Deployment",
      "Continuous Monitoring & Optimization"
    ],
    useCases: [
      "Predictive maintenance systems",
      "Personalized recommendation engines",
      "Fraud detection systems",
      "Supply chain optimization"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS/GCP", "Docker", "Kubernetes"],
    benefits: [
      "Improved accuracy and efficiency",
      "Enhanced customer experience",
      "Increased revenue and competitiveness",
      "Better decision-making and risk management"
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance for Manufacturing",
        description: "Our predictive maintenance solution helped a manufacturing company reduce downtime by 30% and increase overall equipment effectiveness by 25%."
      },
      {
        title: "Personalized Recommendation Engine for E-commerce",
        description: "Our personalized recommendation engine increased sales by 15% and improved customer engagement by 20% for an e-commerce company."
      }
    ]
  },
  2: {
    process: [
      "AI Readiness Assessment",
      "Use Case Identification",
      "ROI Analysis",
      "Implementation Roadmap",
      "Change Management Planning"
    ],
    useCases: [
      "Digital transformation strategy",
      "AI adoption roadmap",
      "Technology stack evaluation",
      "Team skill assessment"
    ],
    technologies: ["Strategic frameworks", "Business analysis tools", "Market research"],
    benefits: [
      "Improved strategic decision-making",
      "Enhanced competitiveness and innovation",
      "Increased efficiency and productivity",
      "Better risk management and compliance"
    ],
    caseStudies: [
      {
        title: "AI Adoption Roadmap for Financial Services",
        description: "Our AI adoption roadmap helped a financial services company identify and prioritize AI use cases, resulting in a 20% increase in revenue and a 15% reduction in costs."
      },
      {
        title: "Digital Transformation Strategy for Retail",
        description: "Our digital transformation strategy helped a retail company improve customer engagement by 25% and increase sales by 10%."
      }
    ]
  },
  3: {
    process: [
      "Model Requirements Gathering",
      "Data Preparation & Feature Engineering",
      "Model Training & Validation",
      "API Development & Documentation",
      "Deployment & Scaling"
    ],
    useCases: [
      "Legacy system modernization",
      "Microservices architecture implementation",
      "Cloud migration solutions",
      "Real-time prediction systems"
    ],
    technologies: ["Scikit-learn", "FastAPI", "Flask", "Kubeflow", "MLflow", "Airflow"],
    benefits: [
      "Seamless integration with existing systems",
      "Improved model performance and scalability",
      "Reduced maintenance overhead",
      "Future-proof architecture"
    ],
    caseStudies: [
      {
        title: "Legacy System Modernization for Healthcare",
        description: "Our legacy system modernization solution helped a healthcare company reduce maintenance costs by 40% and improve system uptime by 30%."
      },
      {
        title: "Microservices Architecture Implementation for E-commerce",
        description: "Our microservices architecture implementation helped an e-commerce company improve scalability by 50% and reduce deployment time by 75%."
      }
    ]
  },
  4: {
    process: [
      "Problem Definition & Scope",
      "Data Collection & Annotation",
      "Model Selection & Training",
      "Evaluation & Optimization",
      "Deployment & Monitoring"
    ],
    useCases: [
      "Sentiment analysis for customer feedback",
      "Document classification and processing",
      "Object detection in images",
      "Video content analysis"
    ],
    technologies: ["NLTK", "spaCy", "OpenCV", "Hugging Face", "BERT", "YOLO"],
    benefits: [
      "Automated text and image processing",
      "Improved content understanding",
      "Enhanced customer insights",
      "Reduced manual review time"
    ],
    caseStudies: [
      {
        title: "Sentiment Analysis for Customer Feedback",
        description: "Our sentiment analysis solution helped a company improve customer satisfaction by 20% and reduce customer complaints by 30%."
      },
      {
        title: "Document Classification and Processing",
        description: "Our document classification and processing solution helped a company reduce manual review time by 80% and improve document accuracy by 90%."
      }
    ]
  },
  5: {
    process: [
      "Skill Gap Analysis",
      "Resource Matching",
      "Team Integration",
      "Knowledge Transfer",
      "Performance Monitoring"
    ],
    useCases: [
      "Short-term project staffing",
      "Specialized skill augmentation",
      "Team scaling for peak periods",
      "Expert mentorship programs"
    ],
    technologies: ["Agile methodologies", "CI/CD pipelines", "MLOps practices", "Code reviews"],
    benefits: [
      "Flexible team scaling",
      "Access to specialized expertise",
      "Reduced hiring costs",
      "Faster project kickoff"
    ],
    caseStudies: [
      {
        title: "Short-term Project Staffing for IT",
        description: "Our short-term project staffing solution helped an IT company complete a project 30% faster and reduce costs by 25%."
      },
      {
        title: "Specialized Skill Augmentation for Finance",
        description: "Our specialized skill augmentation solution helped a finance company improve project quality by 40% and reduce project timelines by 20%."
      }
    ]
  },
  6: {
    process: [
      "Data Assessment",
      "Pipeline Design",
      "ETL Implementation",
      "Dashboard Development",
      "Insight Delivery"
    ],
    useCases: [
      "Customer segmentation analysis",
      "Sales forecasting models",
      "Operational efficiency metrics",
      "Real-time business monitoring"
    ],
    technologies: ["SQL", "Spark", "Tableau", "Power BI", "Looker", "Snowflake"],
    benefits: [
      "Clean, reliable data pipelines",
      "Actionable business insights",
      "Improved decision velocity",
      "Competitive intelligence"
    ],
    caseStudies: [
      {
        title: "Customer Segmentation Analysis for Retail",
        description: "Our customer segmentation analysis solution helped a retail company improve customer targeting by 30% and increase sales by 20%."
      },
      {
        title: "Sales Forecasting Models for Manufacturing",
        description: "Our sales forecasting models solution helped a manufacturing company improve forecast accuracy by 40% and reduce inventory costs by 25%."
      }
    ]
  }
};

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find(s => s.id.toString() === id);
  const details = serviceDetails[id] || {};

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/* Breadcrumb Section */}
        <section id="section-breadcrumb" className="!mb-0">
          <div className="breadcrumb-wrapper !mb-0">
            <div className="global-container">
              <div className="breadcrumb-block pt-6 sm:pt-0">
                <h1 className="breadcrumb-title text-2xl md:text-3xl font-bold">{service.name}</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>{service.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 bg-white">
          <div className="global-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-full h-[300px] rounded-xl flex items-center justify-center mb-8">
                  <Image 
                    src={service.icon} 
                    alt={service.name} 
                    width={100} 
                    height={100} 
                    className="h-24 w-24 bg-white p-6 rounded-full shadow-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Implementation Process</h3>
                  <ol className="space-y-2">
                    {details.process?.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">{i+1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {details.useCases && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">Use Cases</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {details.useCases.map((useCase, i) => (
                        <span key={i} className="bg-gray-50 px-3 py-2 rounded-lg text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {details.technologies && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {details.technologies.map((tech, i) => (
                        <span key={i} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {details.benefits && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">Benefits</h3>
                    <ul className="space-y-3">
                      {details.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {details.caseStudies && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-3">Case Studies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {details.caseStudies.map((caseStudy, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="text-lg font-bold mb-2">{caseStudy.title}</h4>
                          <p className="text-sm text-gray-600">{caseStudy.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block rounded-lg bg-orange-600 px-6 py-3 text-white font-medium hover:bg-orange-700 transition-colors"
                  >
                    Get Started with {service.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="pb-24 md:pb-32"></div> {/* Bottom spacing */}
      <Footer_01 />
    </>
  );
}
