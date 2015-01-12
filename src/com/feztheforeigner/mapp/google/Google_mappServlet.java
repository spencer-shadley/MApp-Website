package com.feztheforeigner.mapp.google;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Google_mappServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, Google_mappServlet.java");
	}
}
