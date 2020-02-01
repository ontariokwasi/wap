package app;

/**
 * HelloServlet
 */
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * HelloServlet
 */
@WebServlet(name = "HelloServlet",urlPatterns = "/hello")
public class HelloServlet extends HttpServlet{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().println("<b>Hello</b>, => World!");
        resp.getWriter().println(req.toString());
    }
}