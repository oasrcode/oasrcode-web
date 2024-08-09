import AngularIcon from "./icons/AngularIcon";
import AzureDevOpsIcon from "./icons/AzureDevOpsIcon";

import CSharpIcon from "./icons/CSharpIcon";
import Css3Icon from "./icons/Css3Icon";
import DockerIcon from "./icons/DockerIcon";
import GithubIcon from "./icons/Github";
import GitIcon from "./icons/GitIcon";
import GrafanaIcon from "./icons/GrafanaIcon";
import HTML5Icon from "./icons/Html5Icon";
import JavaIcon from "./icons/JavaIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import JiraIcon from "./icons/JiraIcon";
import MongoIcon from "./icons/MongoIcon";
import MySQLIcon from "./icons/MySQLIcon";
import NetIcon from "./icons/NetIcon";
import NextJSIcon from "./icons/NextJSIcon";
import NodeIcon from "./icons/NodeIcon";
import OracleIcon from "./icons/OracleIcon";
import PostgresIcon from "./icons/PostgresIcon";
import ReactIcon from "./icons/ReactIcon";
import SlackIcon from "./icons/SlackIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TeamsIcon from "./icons/TeamsIcon";

import TypeScriptIcon from "./icons/TypeScriptIcon";
import InfiniteCarousel from "./InfiniteCarousel";

const frontendIcons = [
  AngularIcon({ height: 80, width: 80 }),
  TypeScriptIcon({ height: 80, width: 80 }),
  JavaScriptIcon({ width: 80, height: 80 }),
  TailwindIcon({ width: 80, height: 80 }),
  ReactIcon({ width: 80, height: 80 }),
  NextJSIcon({ width: 80, height: 80 }),
  HTML5Icon({ width: 80, height: 80 }),
  Css3Icon({ width: 80, height: 80 }),
];
const backendIcons = [
  NodeIcon({ height: 80, width: 80 }),
  MongoIcon({ height: 80, width: 80 }),
  NetIcon({ width: 80, height: 80 }),
  PostgresIcon({ width: 80, height: 80 }),
  CSharpIcon({ width: 80, height: 80 }),
  OracleIcon({ width: 80, height: 80 }),
  SpringBootIcon({ width: 80, height: 80 }),
  JavaIcon({ width: 80, height: 80 }),
  MySQLIcon({ width: 80, height: 80 }),
];
const ToolsIcons = [
  GithubIcon({ height: 80, width: 80 }),
  GitIcon({ height: 80, width: 80 }),
  JiraIcon({ width: 80, height: 80 }),
  TeamsIcon({ width: 80, height: 80 }),
  SlackIcon({ width: 80, height: 80 }),
  AzureDevOpsIcon({ width: 80, height: 80 }),
  DockerIcon({ width: 80, height: 80 }),
  GrafanaIcon({ width: 80, height: 80 }),
];
export default function Skills() {
  return (
    // <div className="flex flex-col mt-20 gap-14">
    //   <p className="font-mono text-2xl"><span className="text-pink-600 font-semibold">private </span><span className="text-blue-700 font-semibold">const </span>Frontend </p>
    //   <InfiniteCarousel icons={frontendIcons} direction={"right"} />
    //   <p className="font-mono text-2xl"><span className="text-pink-600 font-semibold">private </span><span className="text-blue-700 font-semibold">const </span>Backend</p>
    //   <InfiniteCarousel icons={backendIcons} direction={"left"}/>
    //   <p className="font-mono text-2xl"><span className="text-pink-600 font-semibold">private </span><span className="text-blue-700 font-semibold">const </span>Herramientas</p>
    //   <InfiniteCarousel icons={ToolsIcons} direction={"right"}/>
    // </div>

    <div className="mt-20 bg-slate-950 rounded-lg">
      <div className="relative flex items-center justify-between bg-gray-700 p-2 rounded-t-lg">
        <span className="text-center text-sm text-gray-400 flex-grow ">Skills.ts - Visual Studio Code</span>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col text-white  text-opacity-80 p-3">
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>
          <span>32</span>
          <span>33</span>
          <span>34</span>
          <span>35</span>
          <span>36</span>
          <span>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
        </div>

        <div className="flex flex-col mt-2">
          <p className="font-mono text-xl  items-center text-white">
            <span className="text-pink-600 font-semibold">private </span><span className="text-blue-400 font-semibold"> const </span> Frontend
          </p>
          <InfiniteCarousel icons={frontendIcons} direction={"right"} />
          <p className="font-mono text-xl  items-center text-white">
            <span className="text-pink-600 font-semibold">private </span><span className="text-blue-400 font-semibold"> const </span> Backend
          </p>
          <InfiniteCarousel icons={backendIcons} direction={"left"} />
          <p className="font-mono text-xl  items-center text-white">
            <span className="text-pink-600 font-semibold">private </span><span className="text-blue-400 font-semibold"> const </span> Tools
          </p>
          <InfiniteCarousel icons={ToolsIcons} direction={"right"} />
        </div>
      </div>
    </div>
  );
}
