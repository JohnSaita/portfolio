import {
  ArrowRight,
  Database,
  ExternalLink,
  FileCode2,
  Globe2,
  GraduationCap,
  Layers,
  Mail,
  Map,
  MapPin,
  MapPinned,
  Menu,
  MonitorSmartphone,
  Palette,
  Phone,
  Route,
  Satellite,
  SatelliteDish,
  ScanSearch,
  Search,
  Send,
  X,
} from "lucide-react";

const iconMap = {
  ArrowRight,
  Database,
  ExternalLink,
  FileCode2,
  Globe2,
  GraduationCap,
  Layers,
  Mail,
  Map,
  MapPin,
  MapPinned,
  Menu,
  MonitorSmartphone,
  Palette,
  Phone,
  Route,
  Satellite,
  SatelliteDish,
  ScanSearch,
  Search,
  Send,
  X,
};

function Icon({ name, size = 20, strokeWidth = 1.9, ...props }) {
  const LucideIcon = iconMap[name] || Map;
  return <LucideIcon aria-hidden="true" size={size} strokeWidth={strokeWidth} {...props} />;
}

export default Icon;
