import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Calendar, MapPin, Award } from "lucide-react";
import { useEffect, useState } from "react";

const educationData = [
  {
    degree: "Bachelor of Computer Science (BSc)",
    level: "Undergraduate",
    institution: "American International University-Bangladessh (AIUB)",
    location: " Khilkhet, Dhaka-1229, Bangladesh",
    duration: "2022 - Current",
    grade: "CGPA: 3.98 out of 4.0",
    highlights: [
      "Software Engineering",
      "Data Structures",
      "Web Development",
      "Database Systems",
    ],
    status: "Completed",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    level: "Higher Secondary",
    institution: "Bangladesh Chemical Industrial Corporation (BCIC) College",
    location: "Zoo Road, Dhaka-1216",
    duration: "2018 - 2021",
    grade: "GPA: 5.00 out of 5.00",
    highlights: ["Science Group"],
    status: "Completed",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    level: "Secondary",
    institution: "Monipur High School & College (MUBC)",
    location: "Rupnagar R/A - Mirpur , Dhaka-1216",
    duration: "2016 - 2018",
    grade: "GPA: 5.00 out of 5.00",
    highlights: ["Science Group"],
    status: "Completed",
  },
];

export function Education() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className={`py-20 transition-colors duration-500 ${
        isDark
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-blue-50/50 to-purple-50/50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-gray-100" : "text-gray-900"
              }`}
          >
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My academic journey and qualifications that shaped my knowledge and
            skills
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`overflow-hidden transition-colors duration-300 hover:shadow-lg border-l-4 ${
                  isDark
                    ? "border-l-purple-500 bg-gray-800 text-gray-100"
                    : "border-l-blue-500 bg-white text-gray-900"
                }`}
              >
                <CardHeader
                  className={`${
                    isDark
                      ? "bg-gray-800 text-gray-100"
                      : "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle
                        className={`text-xl mb-2 ${
                          isDark ? "text-gray-100" : "text-gray-800"
                        }`}
                      >
                        {edu.degree}
                      </CardTitle>
                      <CardDescription
                        className={isDark ? "text-gray-400" : "text-black"}
                      >
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`self-start md:self-center ${
                        isDark
                          ? "bg-purple-700 text-gray-100"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {edu.level}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent
  className={`pt-6 transition-colors duration-300
    ${isDark ? "bg-gray-800" : "bg-white"}`}
>
  <div
    className={`grid md:grid-cols-3 gap-4 mb-6 ${
      isDark ? "text-gray-300" : "text-gray-700"
    }`}
  >
    <div className="flex items-center gap-2">
      <Calendar
        className={`w-4 h-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
      />
      <span>{edu.duration}</span>
    </div>
    <div className="flex items-center gap-2">
      <MapPin
        className={`w-4 h-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
      />
      <span>{edu.location}</span>
    </div>
    <div className="flex items-center gap-2">
      <Award
        className={`w-4 h-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
      />
      <span className="font-medium">{edu.grade}</span>
    </div>
  </div>

<div>
  <h4
    className={`font-semibold mb-3 ${
      isDark ? "text-gray-200" : "text-black"
    }`}
  >
    Key Subjects/Highlights:
  </h4>
  <div className="flex flex-wrap gap-2">
    {edu.highlights.map((highlight, highlightIndex) => (
      <Badge
        key={highlightIndex}
        variant="outline"
        className={`text-xs ${
          isDark ? "text-gray-200" : "text-black"
        }`}
      >
        {highlight}
      </Badge>
    ))}
  </div>
</div>
</CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
