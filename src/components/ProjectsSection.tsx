
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  accuracy?: string;
  github?: string;
  demo?: string;
};

const projects: ProjectItem[] = [
  {
    title: "Student Gap Analysis",
    description: "Used regression models to identify academic performance gaps and provide targeted interventions for students.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Regression", "Python", "Data Analysis", "Education"],
    accuracy: "92% accuracy",
    github: "https://github.com/bhadurishayoun/student-gap-analysis",
  },
  {
    title: "Face Recognition of Partially Occluded Objects",
    description: "Developed a facial recognition system that can identify individuals even when parts of their face are obscured.",
    image: "https://images.unsplash.com/photo-1587918584555-438e9a9f8942?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Computer Vision", "Deep Learning", "CNN", "OpenCV"],
    accuracy: "98.93% accuracy",
    github: "https://github.com/bhadurishayoun/face-recognition",
  },
  {
    title: "Weather Forecasting",
    description: "Developed a random forest-based prediction model for accurate weather forecasting across different regions.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Random Forest", "Time Series", "Pandas", "Data Visualization"],
    accuracy: "95% accuracy",
    github: "https://github.com/bhadurishayoun/weather-forecast",
  },
  {
    title: "Diversity Inclusion Dashboard",
    description: "Analyzed HR data to uncover gender balance challenges in executive management and create visual insights.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Power BI", "HR Analytics", "Dashboard", "Data Visualization"],
    demo: "https://example.com/diversity-dashboard",
  },
  {
    title: "Virtual Assistant Chatbot",
    description: "Designed a chatbot using Python and ML to enhance productivity and automate routine tasks.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["NLP", "Python", "Machine Learning", "Chatbot"],
    github: "https://github.com/bhadurishayoun/virtual-assistant",
  },
];

const ProjectsSection = () => {
  const titleRef = useAnimateOnScroll();
  const descriptionRef = useAnimateOnScroll();
  
  return (
    <section id="projects" className="section-container py-24 bg-secondary/30">
      <h2 ref={titleRef} className="section-title gradient-text">
        Projects
      </h2>
      
      <p ref={descriptionRef} className="text-center text-lg mb-12 max-w-3xl mx-auto text-foreground/80">
        Here are some of my notable projects that showcase my skills in AI, machine learning, and data science applications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const projectRef = useAnimateOnScroll();
          return (
            <div key={index} ref={projectRef} className="card group h-full flex flex-col">
              <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                {project.accuracy && (
                  <Badge variant="outline" className="mb-2 self-start text-primary">
                    {project.accuracy}
                  </Badge>
                )}
                <p className="text-foreground/80 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/90 hover:bg-transparent group">
                    <span>View details</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
