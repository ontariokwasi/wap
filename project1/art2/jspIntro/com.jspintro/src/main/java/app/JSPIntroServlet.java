package app;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * JSPIntroServlet
 */
@WebServlet(name="JSPIntroServlet", urlPatterns="/JSPIntro")
public class JSPIntroServlet extends HttpServlet{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

protected void doGet(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException
{
 RequestDispatcher dispatcher = request.getRequestDispatcher("Hello.jsp");
 dispatcher.forward(request, response);
}
protected void doPost(HttpServletRequest request, HttpServletResponse response)
 throws ServletException, IOException
{
 RequestDispatcher dispatcher = request.getRequestDispatcher("PostMessage.jsp");
 dispatcher.forward(request, response);
}

}