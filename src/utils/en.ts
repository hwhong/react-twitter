const mapping: Record<string, string> = {
  "sidebar-item-home": "Home",
  "sidebar-item-explore": "Explore",
  "sidebar-item-notifications": "Notifications",
  "sidebar-item-messages": "Messages",
  "sidebar-item-bookmarks": "Bookmarks",
  "sidebar-item-lists": "Lists",
  "sidebar-item-profile": "Profile",
  "sidebar-item-more": "More"
};

export const getMessage = (id: string) => {
  return mapping[id];
};
