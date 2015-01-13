package com.feztheforeigner.mapp.google;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class Units extends HttpServlet{
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
		//resp.sendRedirect(getRealPath(new File(".").getAbsolutePath() + "/war/html/hello.html"));
//		/base/data/home/apps/s~mapp-develop/1.381476311609369211/
		
//		InputStream input = getClass().getResourceAsStream("/main/webapp/resources/styles/some.css");
		
		PrintWriter out = resp.getWriter();
//        String indexHTML = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">\r\n<title>Units</title>\r\n\r\n<!-- jQuery (pulled from Google) -->\r\n<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\r\n\r\n<!-- stylesheets -->\r\n<link rel=\"stylesheet\" href=\"css/unit-list.css\" type=\"text/css\"/>\r\n<link rel=\"stylesheet\" href=\"css/styles.css\" type=\"text/css\"/>\r\n\r\n<!-- load the header -->\r\n<script> \r\n\t$(function(){\r\n\t\t$(\"#header\").load(\"header.html\");\r\n\t});\r\n</script>\r\n\r\n</head>\r\n<body>\r\n\r\n<div id=\"header\"></div>\r\n\r\n<div id=\"unit_card_container\" class=\"content\">\r\n\t<h1 id=\"unit_header\" class=\"center\">Tutorials for Developing MApps</h1>\r\n\r\n\t<!-- Unit Card 1 -->\r\n\t<div class=\"unit_card center\">\r\n\t\t<a href=\"html/tutorial-intro.html\"> <span class=\"link-spanner\"></span> </a> <!-- Tricky way to make div clickable -->\r\n\t\t<h2 class=\"unit_title\">Unit 1</h2>\r\n\t\t<p class=\"unit_desc\">Introduction to Android</p>\r\n\t</div>\r\n\t\r\n\t<!-- Unit Card 2 -->\r\n\t<div class=\"unit_card center\">\r\n\t\t<a href=\"html/tutorial-create.html\"> <span class=\"link-spanner\"></span> </a> <!-- Tricky way to make div clickable -->\r\n\t\t<h2 class=\"unit_title\">Unit 2</h2>\r\n\t\t<p class=\"unit_desc\">Creating your First App</p>\r\n\t</div>\r\n\t\r\n\t<!-- Unit Card 3 -->\r\n\t<div class=\"unit_card center\">\r\n\t\t<a href=\"html/tutorial-widgets.html\"> <span class=\"link-spanner\"></span> </a> <!-- Tricky way to make div clickable -->\r\n\t\t<h2 class=\"unit_title\">Unit 3</h2>\r\n\t\t<p class=\"unit_desc\">More about Widgets</p>\r\n\t</div>\r\n\t\r\n\t<!-- Unit Card 4 -->\r\n\t<div class=\"unit_card center\">\r\n\t\t<a href=\"html/tutorial-organize.html\"> <span class=\"link-spanner\"></span> </a> <!-- Tricky way to make div clickable -->\r\n\t\t<h2 class=\"unit_title\">Unit 4</h2>\r\n\t\t<p class=\"unit_desc\">Putting it all Together</p>\r\n\t</div>\r\n\t\r\n\t<!-- Unit Card 5 -->\r\n\t<div class=\"unit_card center\">\r\n\t\t<a href=\"html/tutorial-projects.html\"> <span class=\"link-spanner\"></span> </a> <!-- Tricky way to make div clickable -->\r\n\t\t<h2 class=\"unit_title\">Unit 5</h2>\r\n\t\t<p class=\"unit_desc\">Final Projects</p>\r\n\t</div>\r\n\t\r\n\t<!-- Unit Card 6 -->\r\n\t<div class=\"unit_card center\">\r\n\t\t<a href=\"html/tutorial-publish.html\"> <span class=\"link-spanner\"></span> </a> <!-- Tricky way to make div clickable -->\r\n\t\t<h2 class=\"unit_title\">Unit 6</h2>\r\n\t\t<p class=\"unit_desc\">Publish</p>\r\n\t</div>\r\n</div>\r\n\r\n</body>\r\n</html>";
        out.println("This is a development page. How'd you get here???");

	}
}