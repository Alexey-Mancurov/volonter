const SidebarModuleBlockHeader = (props) => {
  return (
    <div className="test__sidebar-block-box">
      <div className="test__sidebar-block-title">{props.title}</div>
      <svg
        width="24"
        height="19"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.092 18.7148L0.855795 0.750248L23.3282 0.75025L12.092 18.7148Z"
          fill="#4D9EF8"
        />
      </svg>
    </div>
  );
};

export default SidebarModuleBlockHeader;
