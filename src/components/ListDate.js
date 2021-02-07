import React from "react";
import { Button, Row} from "react-bootstrap";

const ListDate = () => {
  return (
      <Row className="justify-content-md-center mt-4">
        <button className="btndate mb-1">SEN<br/><strong>11</strong></button>
        <button className="btndate mb-1">SEL<br/><strong>12</strong></button>
        <button className="btndate mb-1">RAB<br/><strong>13</strong></button>
        <button className="btndate mb-1">KAM<br/><strong>14</strong></button>
        <button className="btndate mb-1">JUM<br/><strong>15</strong></button>
        <button className="btndate mb-1" disabled>SAB<br/><strong>16</strong></button>
        <button className="btndate mb-1" disabled>MIN<br/><strong>17</strong></button>
        <button className="btndate mb-1">SEN<br/><strong>18</strong></button>
        <button className="btndate mb-1">SEL<br/><strong>19</strong></button>
        <button className="btndate mb-1">RAB<br/><strong>20</strong></button>
        <button className="btndate mb-1">KAM<br/><strong>21</strong></button>
        <button className="btndate mb-1">JUM<br/><strong>22</strong></button>
        <button className="btndate mb-1" disabled>SAB<br/><strong>23</strong></button>
        <button className="btndate mb-1" disabled>MIN<br/><strong>24</strong></button>
      </Row>
  );
};

export default ListDate;
