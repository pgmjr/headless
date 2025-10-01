const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm ">{description}</p>
  </div>
);

export default ProjectCard;